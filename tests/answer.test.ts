import request from "supertest";
import app from "../src/server";
import prisma from "../src/db";

describe("Answer Routes", () => {
  let quizId: string = "";
  let token: string = "";
  let questionId: string = "";
  let answerId: string = "";

  /**
   * Before all tests, register a user for testing
   * and get the token to use it for authorization
   * Also create a quiz and question to addd corresponding answers to it
   */

  beforeAll(async () => {
    try {
      const userResponse = await request(app).post("/auth/register").send({
        username: "testAnswerUser",
        email: "testAnswer@test.com",
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
      const questionResponse = await request(app)
        .post(`/quizzes/${quizId}/questions`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          text: "Sample Question",
          questionType: "MCQ",
        });
      questionId = questionResponse.body.id;
    } catch (err) {
      console.log("Error in initializing phase:", err);
    }
  });

  /**
   * Test cases for creating a new answer
   */

  it("should create an answer and add to a question", async () => {
    const response = await request(app)
      .post(`/quizzes/${quizId}/questions/${questionId}/answers`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        text: "Sample Answer",
        isCorrect: true,
      });

    expect(response.status).toBe(201);
    expect(response.body.text).toBe("Sample Answer");
    answerId = response.body.id;
  });

  /**
   * Test cases for getting all answers, getting an answer by id,
   */

  it("should get all answers for a question", async () => {
    const response = await request(app)
      .get(`/quizzes/${quizId}/questions/${questionId}/answers`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should get an answer by id", async () => {
    const response = await request(app)
      .get(`/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(answerId);
  });

  /**
   * Test cases for updating and deleting an answer
   */
  it("should update an answer", async () => {
    const response = await request(app)
      .put(`/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        text: "Updated Answer",
      });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe("Updated Answer");
  });

  /**
   * first delete the answer (200) and then check if it is deleted (404)
   */
  it("should delete an answer", async () => {
    const response = await request(app)
      .delete(`/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
      .set("Authorization", `Bearer ${token}`);
    const getResponse = await request(app)
      .get(`/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(getResponse.status).toBe(404);
  });

  /**
   * Cleanup after all tests have run (tearDown)
   * Delete the answer, question, and quiz (respectively) created for testing
   */

  afterAll(async () => {
    try {
      if (quizId) {
        const quizExists = await prisma.quiz.findUnique({
          where: { id: quizId },
        });
        if (quizExists) {
          if (questionId) {
            const questionExists = await prisma.question.findUnique({
              where: { id: questionId },
            });
            if (questionExists) {
              await prisma.answer.deleteMany({
                where: { questionId: questionId },
              });
              await prisma.question.delete({ where: { id: questionId } });
            }
          }
          await prisma.quiz.delete({ where: { id: quizId } });
        }
      }
      await prisma.user.delete({ where: { email: "testAnswer@test.com" } });
    } catch (error) {
      console.error("Error during cleanup:", error);
    }
  });
});
