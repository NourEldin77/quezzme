import prisma from "../db";
import { QuestionType } from "@prisma/client";

export const addQuestionToQuiz = async (
  quizId: string,
  questionData: { text: string; questionType: QuestionType }
) => {
  return await prisma.question.create({
    data: {
      ...questionData,
      quiz: { connect: { id: quizId } },
    },
  });
};

export const getAllQuestionsForQuiz = async (quizId: string) => {
  return await prisma.question.findMany({
    where: { quizId },
    include: { answers: true },
  });
};

export const getQuestionById = async (questionId: string) => {
  return await prisma.question.findUnique({
    where: { id: questionId },
    include: { answers: true },
  });
};

export const updateQuestion = async (
  questionId: string,
  questionData: { text?: string; questionType?: QuestionType }
) => {
  return await prisma.question.update({
    where: { id: questionId },
    data: questionData,
  });
};

export const deleteQuestion = async (questionId: string) => {
  return await prisma.question.delete({ where: { id: questionId } });
};
