"use strict";
exports.__esModule = true;
exports.handleInputErrors = exports.validate = void 0;
var express_validator_1 = require("express-validator");
var client_1 = require("@prisma/client");
var validate = function (method) {
    switch (method) {
        case "createUser": {
            return [
                (0, express_validator_1.body)("username").isString().notEmpty(),
                (0, express_validator_1.body)("email").isEmail().notEmpty(),
                (0, express_validator_1.body)("password").isString().notEmpty(),
                (0, express_validator_1.body)("passwordConfirmation")
                    .isString()
                    .notEmpty()
                    .custom(function (value, _a) {
                    var req = _a.req;
                    if (value !== req.body.password) {
                        throw new Error("Password confirmation does not match password");
                    }
                    return true;
                }),
            ];
        }
        case "loginUser": {
            return [
                (0, express_validator_1.body)("email").isEmail().notEmpty(),
                (0, express_validator_1.body)("password").isString().notEmpty(),
            ];
        }
        case "createQuiz": {
            return [
                (0, express_validator_1.body)("title").isString().notEmpty(),
                (0, express_validator_1.body)("description").optional().isString(),
            ];
        }
        case "updateQuiz": {
            return [
                (0, express_validator_1.body)("title").optional().isString(),
                (0, express_validator_1.body)("description").optional().isString(),
            ];
        }
        case "createQuestion": {
            return [
                (0, express_validator_1.body)("text").isString().notEmpty(),
                (0, express_validator_1.body)("questionType").isIn(Object.values(client_1.QuestionType)),
            ];
        }
        case "updateQuestion": {
            return [
                (0, express_validator_1.body)("text").optional().isString(),
                (0, express_validator_1.body)("questionType").optional().isIn(Object.values(client_1.QuestionType)),
            ];
        }
        case "createAnswer": {
            return [
                (0, express_validator_1.body)("text").isString().notEmpty(),
                (0, express_validator_1.body)("isCorrect").isBoolean().notEmpty(),
            ];
        }
        case "updateAnswer": {
            return [
                (0, express_validator_1.body)("text").optional().isString(),
                (0, express_validator_1.body)("isCorrect").optional().isBoolean(),
            ];
        }
        default: {
            return [];
        }
    }
};
exports.validate = validate;
var handleInputErrors = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.handleInputErrors = handleInputErrors;
//# sourceMappingURL=validationMiddleware.js.map