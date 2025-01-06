import * as answerModel from "../models/answer";
import { Request, Response } from "express";

export const getAllAnswersForQuestion = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const answers = await answerModel.getAllAnswersForQuestion(questionId);
    if (!answers) {
      return res.status(404).json({ error: "Cannot find the answers" });
    }
    res.json(answers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get answers for question" });
  }
};

export const getAnswerById = async (req: Request, res: Response) => {
  try {
    const { answerId } = req.params;
    const answer = await answerModel.getAnswerById(answerId);

    if (!answer) {
      return res.status(404).json({ error: "Answer not found" });
    }
    res.json(answer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get answer" });
  }
};

export const addAnswerToQuestion = async (req: Request, res: Response) => {
  try {
    const { questionId } = req.params;
    const { text, isCorrect } = req.body;

    const newAnswer = await answerModel.addAnswerToQuestion(questionId, {
      text,
      isCorrect,
    });
    res.status(201).json(newAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add answer to question" });
  }
};

export const updateAnswer = async (req: Request, res: Response) => {
  try {
    const { answerId } = req.params;
    const { text, isCorrect } = req.body;

    const updateAnswer = await answerModel.updateAnswer(answerId, {
      text,
      isCorrect,
    });

    if (!updateAnswer) {
      return res.status(404).json({ error: "Cannot find the Answer" });
    }

    res.json(updateAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update answer" });
  }
};
export const deleteAnswer = async (req: Request, res: Response) => {
  try {
    const { answerId } = req.params;
    const deletedAnswer = await answerModel.deleteAnswer(answerId);

    if (!deletedAnswer) {
      return res.status(404).json({ message: "Answer not found" });
    }

    res.json({ message: "Answer deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete answer" });
  }
};
