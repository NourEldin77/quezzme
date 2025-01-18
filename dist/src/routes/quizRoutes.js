"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var express_1 = require("express");
var quizController = __importStar(require("../controllers/quizController"));
var questionController = __importStar(require("../controllers/questionController"));
var answerController = __importStar(require("../controllers/answerController"));
var validationMiddleware_1 = require("../middlewares/validationMiddleware");
var router = (0, express_1.Router)();
/* quizz routes */
router.post("/", (0, validationMiddleware_1.validate)("createQuiz"), validationMiddleware_1.handleInputErrors, quizController.createQuiz); // Create a quiz
router.get("/", quizController.getAllQuizzes); // Get all user's quizzes
router.get("/:id", quizController.getQuizById); // Get a quiz by id
router.put("/:id", (0, validationMiddleware_1.validate)("updateQuiz"), validationMiddleware_1.handleInputErrors, quizController.updateQuiz); // Update a quiz by id
router["delete"]("/:id", quizController.deleteQuiz); // Delete a quiz by id
/* Question routes */
router.post("/:quizId/questions", (0, validationMiddleware_1.validate)("createQuestion"), validationMiddleware_1.handleInputErrors, questionController.addQuestionToQuiz); // Create a question and add it to a quiz
router.get("/:quizId/questions", questionController.getAllQuestionsForQuiz); // get all questions from a quiz
router.get("/:quizId/questions/:questionId", questionController.getQuestionById); // get a question by id
router.put("/:quizId/questions/:questionId", (0, validationMiddleware_1.validate)("updateQuestion"), validationMiddleware_1.handleInputErrors, questionController.updateQuestion); // update a question by id
router["delete"]("/:quizId/questions/:questionId", questionController.deleteQuestion); // delete a question by id
/* Answer routes */
router.post("/:quizId/questions/:questionId/answers", answerController.addAnswerToQuestion, (0, validationMiddleware_1.validate)("createAnswer"), validationMiddleware_1.handleInputErrors); // Create an answer and add it to a question
router.get("/:quizId/questions/:questionId/answers", answerController.getAllAnswersForQuestion); // get all answers from a question
router.get("/:quizId/questions/:questionId/answers/:answerId", answerController.getAnswerById); // get an answer by id
router.put("/:quizId/questions/:questionId/answers/:answerId", answerController.updateAnswer, (0, validationMiddleware_1.validate)("updateAnswer"), validationMiddleware_1.handleInputErrors); // update an answer by id
router["delete"]("/:quizId/questions/:questionId/answers/:answerId", answerController.deleteAnswer); // delete an answer by id
exports["default"] = router;
//# sourceMappingURL=quizRoutes.js.map