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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteQuestion = exports.updateQuestion = exports.addQuestionToQuiz = exports.getQuestionById = exports.getAllQuestionsForQuiz = void 0;
var questionModel = __importStar(require("../models/question"));
var client_1 = require("@prisma/client");
var getAllQuestionsForQuiz = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quizId, questions, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                quizId = req.params.quizId;
                return [4 /*yield*/, questionModel.getAllQuestionsForQuiz(quizId)];
            case 1:
                questions = _a.sent();
                res.json(questions);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).json({ error: "Failed to get questions for the quiz" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllQuestionsForQuiz = getAllQuestionsForQuiz;
var getQuestionById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, question, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                questionId = req.params.questionId;
                return [4 /*yield*/, questionModel.getQuestionById(questionId)];
            case 1:
                question = _a.sent();
                if (!question) {
                    return [2 /*return*/, res.status(404).json({ error: "Question not found" })];
                }
                res.json(question);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).json({ error: "Failed to get question" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getQuestionById = getQuestionById;
var addQuestionToQuiz = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quizId, _a, text, questionType, newQuestion, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                quizId = req.params.quizId;
                _a = req.body, text = _a.text, questionType = _a.questionType;
                if (!Object.values(client_1.QuestionType).includes(questionType)) {
                    return [2 /*return*/, res.status(400).json({ error: "Invalid question type" })];
                }
                return [4 /*yield*/, questionModel.addQuestionToQuiz(quizId, {
                        text: text,
                        questionType: questionType
                    })];
            case 1:
                newQuestion = _b.sent();
                res.status(201).json(newQuestion);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).json({ error: "Failed to add question to quiz" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addQuestionToQuiz = addQuestionToQuiz;
var updateQuestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, _a, text, questionType, updatedQuestion, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                questionId = req.params.questionId;
                _a = req.body, text = _a.text, questionType = _a.questionType;
                if (questionType && !Object.values(client_1.QuestionType).includes(questionType)) {
                    return [2 /*return*/, res.status(400).json({ error: "Invalid question type" })];
                }
                return [4 /*yield*/, questionModel.updateQuestion(questionId, {
                        text: text,
                        questionType: questionType
                    })];
            case 1:
                updatedQuestion = _b.sent();
                if (!updatedQuestion) {
                    return [2 /*return*/, res.status(404).json({ error: "Question not found" })];
                }
                res.json(updatedQuestion);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).json({ error: "Failed to update question" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateQuestion = updateQuestion;
var deleteQuestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, deletedQuestion, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                questionId = req.params.questionId;
                return [4 /*yield*/, questionModel.deleteQuestion(questionId)];
            case 1:
                deletedQuestion = _a.sent();
                if (!deletedQuestion) {
                    return [2 /*return*/, res.status(404).json({ error: "Question not found" })];
                }
                res.json({ message: "Question deleted successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).json({ error: "Failed to delete question" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=questionController.js.map