import { body, validationResult } from "express-validator";
import { QuestionType } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export const validate = (method: string) => {
  switch (method) {
    case "createUser": {
      return [
        body("username").isString().notEmpty(),
        body("email").isEmail().notEmpty(),
        body("password").isString().notEmpty(),
        body("passwordConfirmation")
          .isString()
          .notEmpty()
          .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Password confirmation does not match password");
            }
            return true;
          }),
      ];
    }
    case "loginUser": {
      return [
        body("email").isEmail().notEmpty(),
        body("password").isString().notEmpty(),
      ];
    }
    case "createQuiz": {
      return [
        body("title").isString().notEmpty(),
        body("description").optional().isString(),
      ];
    }
    case "updateQuiz": {
      return [
        body("title").optional().isString(),
        body("description").optional().isString(),
      ];
    }
    case "createQuestion": {
      return [
        body("text").isString().notEmpty(),
        body("questionType").isIn(Object.values(QuestionType)),
      ];
    }
    case "updateQuestion": {
      return [
        body("text").optional().isString(),
        body("questionType").optional().isIn(Object.values(QuestionType)),
      ];
    }
    case "createAnswer": {
      return [
        body("text").isString().notEmpty(),
        body("isCorrect").isBoolean().notEmpty(),
      ];
    }
    case "updateAnswer": {
      return [
        body("text").optional().isString(),
        body("isCorrect").optional().isBoolean(),
      ];
    }
    default: {
      return [];
    }
  }
};

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
