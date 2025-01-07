import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import * as quizController from "../controllers/quizController";
import * as questionController from "../controllers/questionController";
import * as answerController from "../controllers/answerController";

const router = Router();

/* quizz routes */

router.post("/", quizController.createQuiz); // Create a quiz
router.get("/", quizController.getAllQuizzes); // Get all user's quizzes
router.get("/:id", quizController.getQuizById); // Get a quiz by id
router.put("/:id", quizController.updateQuiz); // Update a quiz by id
router.delete("/:id", quizController.deleteQuiz); // Delete a quiz by id

/* Question routes */

router.post("/:quizId/questions", questionController.addQuestionToQuiz); // Create a question and add it to a quiz
router.get("/:quizId/questions", questionController.getAllQuestionsForQuiz); // get all questions from a quiz
router.get(
  "/:quizId/questions/:questionId",
  questionController.getQuestionById
); // get a question by id
router.put("/:quizId/questions/:questionId", questionController.updateQuestion); // update a question by id
router.delete(
  "/:quizId/questions/:questionId",
  questionController.deleteQuestion
); // delete a question by id

/* Answer routes */

router.post(
  "/:quizId/questions/:questionId/answers",
  answerController.addAnswerToQuestion
); // Create an answer and add it to a question
router.get(
  "/:quizId/questions/:questionId/answers",
  answerController.getAllAnswersForQuestion
); // get all answers from a question
router.get(
  "/:quizId/questions/:questionId/answers/:answerId",
  answerController.getAnswerById
); // get an answer by id
router.put(
  "/:quizId/questions/:questionId/answers/:answerId",
  answerController.updateAnswer
); // update an answer by id
router.delete(
  "/:quizId/questions/:questionId/answers/:answerId",
  answerController.deleteAnswer
); // delete an answer by id

export default router;
