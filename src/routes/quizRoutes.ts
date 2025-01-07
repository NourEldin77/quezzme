import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import * as quizController from "../controllers/quizController";
import * as questionController from "../controllers/questionController";
import * as answerController from "../controllers/answerController";
import {
  validate,
  handleInputErrors,
} from "../middlewares/validationMiddleware";

const router = Router();

/* quizz routes */

router.post(
  "/",
  validate("createQuiz"),
  handleInputErrors,
  quizController.createQuiz
); // Create a quiz
router.get("/", quizController.getAllQuizzes); // Get all user's quizzes
router.get("/:id", quizController.getQuizById); // Get a quiz by id
router.put(
  "/:id",
  validate("updateQuiz"),
  handleInputErrors,
  quizController.updateQuiz
); // Update a quiz by id
router.delete("/:id", quizController.deleteQuiz); // Delete a quiz by id

/* Question routes */

router.post(
  "/:quizId/questions",
  validate("createQuestion"),
  handleInputErrors,
  questionController.addQuestionToQuiz
); // Create a question and add it to a quiz
router.get("/:quizId/questions", questionController.getAllQuestionsForQuiz); // get all questions from a quiz
router.get(
  "/:quizId/questions/:questionId",
  questionController.getQuestionById
); // get a question by id
router.put(
  "/:quizId/questions/:questionId",
  validate("updateQuestion"),
  handleInputErrors,
  questionController.updateQuestion
); // update a question by id
router.delete(
  "/:quizId/questions/:questionId",
  questionController.deleteQuestion
); // delete a question by id

/* Answer routes */

router.post(
  "/:quizId/questions/:questionId/answers",
  answerController.addAnswerToQuestion,
  validate("createAnswer"),
  handleInputErrors
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
  answerController.updateAnswer,
  validate("updateAnswer"),
  handleInputErrors
); // update an answer by id
router.delete(
  "/:quizId/questions/:questionId/answers/:answerId",
  answerController.deleteAnswer
); // delete an answer by id

export default router;
