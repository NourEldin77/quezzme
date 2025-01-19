import request from "supertest";
import app from "../src/server";
import prisma from "../src/db";

describe("Auth API", () => {
  /**
   * Test case for registering a new user
   */
  it("should register a new user", async () => {
    const response = await request(app).post("/auth/register").send({
      username: "testuser",
      email: "testuser@test.com",
      password: "testpassword",
      passwordConfirmation: "testpassword",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("token");

    const user = await prisma.user.findUnique({
      where: { email: "testuser@test.com" },
    });
    expect(user).toBeDefined();
    expect(user!.username).toBe("testuser");
  });

  /**
   * Test case for logging in a user
   */
  it("should log in a user", async () => {
    await request(app).post("/auth/register").send({
      username: "testuser2",
      email: "testuser2@test.com",
      password: "testpassword",
      passwordConfirmation: "testpassword",
    });

    const response = await request(app).post("/auth/login").send({
      email: "testuser2@test.com",
      password: "testpassword",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  /**
   * Cleanup after all tests have run
   */
  afterAll(async () => {
    try {
      await prisma.user.delete({ where: { email: "testuser@test.com" } });
      await prisma.user.delete({ where: { email: "testuser2@test.com" } });
    } catch (error) {
      console.error("Error during cleanup:", error);
    }
    // Disconnect from the database
    await prisma.$disconnect();
  });
});
