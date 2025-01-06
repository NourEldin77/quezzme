import prisma from "../db";

export const addAnswerToQuestion = async (
  questionId: string,
  answerData: { text: string; isCorrect: boolean }
) => {
  return await prisma.answer.create({
    data: {
      ...answerData,
      question: { connect: { id: questionId } },
    },
  });
};

export const getAllAnswersForQuestion = async (questionId: string) => {
  return await prisma.answer.findMany({
    where: { questionId },
  });
};

export const getAnswerById = async (answerId: string) => {
  return await prisma.answer.findUnique({
    where: { id: answerId },
  });
};

export const updateAnswer = async (
  answerId: string,
  answerData: { text?: string; isCorrect?: boolean }
) => {
  return await prisma.answer.update({
    where: { id: answerId },
    data: answerData,
  });
};

export const deleteAnswer = async (answerId: string) => {
  return await prisma.answer.delete({ where: { id: answerId } });
};
