import request from "supertest";
import app from "../src/server";
import prisma from "../src/db";

describe("Question Routes", () => {
  let quizId: string = "";
  let token: string = "";
  let questionId: string = "";

  /**
   * Before all tests, register a user for testing
   * and get the token to use it for authorization
   * Also create a quiz to add questions to
   */
  beforeAll(async () => {
    try {
      const userResponse = await request(app).post("/auth/register").send({
        username: "testQuestionUser",
        email: "testQuestion@test.com",
        password: "testpassword",
        passwordConfirmation: "testpassword",
      });
      token = userResponse.body.token;

      const quizResponse = await request(app)
        .post("/quizzes")
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "Sample Quiz",
          description: "This is a sample quiz",
        });
      quizId = quizResponse.body.id;
    } catch (err) {
      console.log("Error in initializing phase:", err);
    }
  });

  /**
   * Test cases for creating a new question
   */
  it("should creat a question and add to a quiz", async () => {
    const response = await request(app)
      .post(`/quizzes/${quizId}/questions`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        text: "Sample Question",
        questionType: "MCQ",
      });

    expect(response.status).toBe(201);
    expect(response.body.text).toBe("Sample Question");
    questionId = response.body.id;
  });

  /**
   * Test cases for getting all questions, getting a question by id,
   */

  it("should get all questions for a quiz", async () => {
    const response = await request(app)
      .get(`/quizzes/${quizId}/questions`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should get a question by id", async () => {
    const response = await request(app)
      .get(`/quizzes/${quizId}/questions/${questionId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(questionId);
  });

  /**
   * Test cases for updating and deleting a question
   */

  it("should update a question", async () => {
    const response = await request(app)
      .put(`/quizzes/${quizId}/questions/${questionId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        text: "Updated Question",
      });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe("Updated Question");
  });

  it("should delete a question", async () => {
    const response = await request(app)
      .delete(`/quizzes/${quizId}/questions/${questionId}`)
      .set("Authorization", `Bearer ${token}`);
    const getResponse = await request(app)
      .get(`/quizzes/${quizId}/questions/${questionId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(getResponse.status).toBe(404);
  });

  /**
   * Cleanup after all tests have run (tearDown)
   */
  afterAll(async () => {
    try {
      if (quizId) {
        const quizExists = await prisma.quiz.findUnique({
          where: { id: quizId },
        });
        if (quizExists) {
          await prisma.question.deleteMany({ where: { quizId: quizId } });
          await prisma.quiz.delete({ where: { id: quizId } });
        }
      }
      await prisma.user.delete({ where: { email: "testQuestion@test.com" } });
    } catch (error) {
      console.error("Error during cleanup:", error);
    }
  });
});
