import * as quizModel from "../models/quiz";
import { Request, Response } from "express";

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await quizModel.getAllQuizzes();
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
};

export const getQuizById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const quiz = await quizModel.getQuizById(id);

    if (!quiz) {
      return res.status(404).json({ error: "Cannot find the Quiz" });
    }

    res.json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get the quiz" });
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const userId = req.user!.userId;

    const newQuiz = await quizModel.createQuiz({ title, description, userId });
    res.status(201).json(newQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create quiz" });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedQuiz = await quizModel.updateQuiz(id, { title, description });

    if (!updatedQuiz) {
      return res.status(404).json({ error: "Cannot find the Quiz" });
    }
    res.json(updatedQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update quiz" });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedQuiz = await quizModel.deleteQuiz(id);

    if (!deleteQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete quiz" });
  }
};
