import request from "supertest";
import app from "../src/server";
import prisma from "../src/db";

describe("Quiz Routes", () => {
  let quizId: string = "";
  let token: string = "";

  /**
   * Before all tests, register a user for testing
   * and get the token to use it for authorization
   */
  beforeAll(async () => {
    try {
      const response = await request(app).post("/auth/register").send({
        username: "testQuizUser",
        email: "testQuiz@test.com",
        password: "testpassword",
        passwordConfirmation: "testpassword",
      });
      token = response.body.token;
    } catch (err) {
      console.log("Error in initializing phase:", err);
    }
  });

  /**
   * Test cases for creating a new quiz
   */

  it("should create a new quiz", async () => {
    const response = await request(app)
      .post("/quizzes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Sample Quiz",
        description: "This is a sample quiz",
        userId: "b31eeb21-eca0-4664-8611-423350cf9948",
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Sample Quiz");
    quizId = response.body.id;
  });

  /**
   * Test cases for getting all quizzes, getting a quiz by id,
   */

  it("should get all quizzes", async () => {
    const response = await request(app)
      .get("/quizzes")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should get a quiz by id", async () => {
    const response = await request(app)
      .get(`/quizzes/${quizId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(quizId);
  });

  /**
   * Test cases for updating and deleting a quiz
   */

  it("should update a quiz", async () => {
    const response = await request(app)
      .put(`/quizzes/${quizId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Updated Quiz Title",
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Updated Quiz Title");
  });

  it("should delete a quiz", async () => {
    const response = await request(app)
      .delete(`/quizzes/${quizId}`)
      .set("Authorization", `Bearer ${token}`);
    const getResponse = await request(app)
      .get(`/quizzes/${quizId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(getResponse.status).toBe(404);
  });
  /**
   * After all tests, delete quiz and user created for testing
   */

  afterAll(async () => {
    try {
      if (quizId) {
        await prisma.quiz.delete({ where: { id: quizId } });
      }
      await prisma.user.delete({ where: { email: "testQuiz@test.com" } });
    } catch (error) {
      console.error("Error during cleanup:", error);
    }
  });
});
