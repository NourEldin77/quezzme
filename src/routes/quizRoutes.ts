import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.use(protect);

/* quizz routes */

router.post("/", () => {}); // Create a quiz
router.get("/", () => {}); // Get all user's quizzes
router.get("/:id", () => {}); // Get a quiz by id
router.put("/:id", () => {}); // Update a quiz by id
router.delete("/:id", () => {}); // Delete a quiz by id

/* Question routes */

router.post("/:id/questions", () => {}); // Create a question and add it to a quiz
router.get("/:id/questions", () => {}); // get all questions from a quiz
router.get("/:quizId/questions/:questionId", () => {}); // get a question by id
router.put("/:quizId/questions/:questionId", () => {}); // update a question by id
router.delete("/:quizId/questions/:questionId", () => {}); // delete a question by id

/* Answer routes */

router.post("/:quizId/questions/:questionId/answers", () => {}); // Create an answer and add it to a question
router.get("/:quizId/questions/:questionId/answers", () => {}); // get all answers from a question
router.get("/:quizId/questions/:questionId/answers/:answerId", () => {}); // get an answer by id
router.put("/:quizId/questions/:questionId/answers/:answerId", () => {}); // update an answer by id
router.delete("/:quizId/questions/:questionId/answers/:answerId", () => {}); // delete an answer by id

export default router;
