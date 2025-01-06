import * as questionModel from "../models/question";
import { Request, Response } from "express";
import { QuestionType } from "@prisma/client";

export const getAllQuestionsForQuiz = async (req: Request, res: Response) => {
  try {
    const { quizId } = req.params;
    const questions = await questionModel.getAllQuestionsForQuiz(quizId);

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get questions for the quiz" });
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const question = await questionModel.getQuestionById(questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get question" });
  }
};

export const addQuestionToQuiz = async (req: Request, res: Response) => {
  try {
    const { quizId } = req.params;
    const { text, questionType } = req.body;

    if (!Object.values(QuestionType).includes(questionType)) {
      return res.status(400).json({ message: "Invalid question type" });
    }

    const newQuestion = await questionModel.addQuestionToQuiz(quizId, {
      text,
      questionType,
    });
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add question to quiz" });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const { text, questionType } = req.body;

    if (questionType && !Object.values(QuestionType).includes(questionType)) {
      return res.status(400).json({ message: "Invalid question type" });
    }

    const updatedQuestion = await questionModel.updateQuestion(questionId, {
      text,
      questionType,
    });
    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update question" });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const deletedQuestion = await questionModel.deleteQuestion(questionId);

    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete question" });
  }
};
