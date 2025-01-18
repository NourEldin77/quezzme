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
exports.deleteAnswer = exports.updateAnswer = exports.addAnswerToQuestion = exports.getAnswerById = exports.getAllAnswersForQuestion = void 0;
var answerModel = __importStar(require("../models/answer"));
var getAllAnswersForQuestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, answers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                questionId = req.params.questionId;
                return [4 /*yield*/, answerModel.getAllAnswersForQuestion(questionId)];
            case 1:
                answers = _a.sent();
                if (!answers) {
                    return [2 /*return*/, res.status(404).json({ error: "Cannot find the answers" })];
                }
                res.json(answers);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).json({ error: "Failed to get answers for question" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllAnswersForQuestion = getAllAnswersForQuestion;
var getAnswerById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var answerId, answer, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                answerId = req.params.answerId;
                return [4 /*yield*/, answerModel.getAnswerById(answerId)];
            case 1:
                answer = _a.sent();
                if (!answer) {
                    return [2 /*return*/, res.status(404).json({ error: "Answer not found" })];
                }
                res.json(answer);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).json({ error: "Failed to get answer" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAnswerById = getAnswerById;
var addAnswerToQuestion = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var questionId, _a, text, isCorrect, newAnswer, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                questionId = req.params.questionId;
                _a = req.body, text = _a.text, isCorrect = _a.isCorrect;
                return [4 /*yield*/, answerModel.addAnswerToQuestion(questionId, {
                        text: text,
                        isCorrect: isCorrect
                    })];
            case 1:
                newAnswer = _b.sent();
                res.status(201).json(newAnswer);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).json({ error: "Failed to add answer to question" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addAnswerToQuestion = addAnswerToQuestion;
var updateAnswer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var answerId, _a, text, isCorrect, updateAnswer_1, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                answerId = req.params.answerId;
                _a = req.body, text = _a.text, isCorrect = _a.isCorrect;
                return [4 /*yield*/, answerModel.updateAnswer(answerId, {
                        text: text,
                        isCorrect: isCorrect
                    })];
            case 1:
                updateAnswer_1 = _b.sent();
                if (!updateAnswer_1) {
                    return [2 /*return*/, res.status(404).json({ error: "Cannot find the Answer" })];
                }
                res.json(updateAnswer_1);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                res.status(500).json({ error: "Failed to update answer" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateAnswer = updateAnswer;
var deleteAnswer = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var answerId, deletedAnswer, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                answerId = req.params.answerId;
                return [4 /*yield*/, answerModel.deleteAnswer(answerId)];
            case 1:
                deletedAnswer = _a.sent();
                if (!deletedAnswer) {
                    return [2 /*return*/, res.status(404).json({ error: "Answer not found" })];
                }
                res.json({ message: "Answer deleted" });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).json({ error: "Failed to delete answer" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAnswer = deleteAnswer;
//# sourceMappingURL=answerController.js.map