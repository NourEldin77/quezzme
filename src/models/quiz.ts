import prisma from "../db";

export const getAllQuizzes = async (userId: string) => {
  return await prisma.quiz.findMany({
    where: { userId },
  });
};

export const getQuizById = async (id: string) => {
  return await prisma.quiz.findUnique({
    where: { id },
    include: { questions: { include: { answers: true } } },
  });
};

export const createQuiz = async (quizData: {
  title: string;
  description: string;
  userId: string;
}) => {
  return await prisma.quiz.create({
    data: quizData,
  });
};

export const updateQuiz = async (
  id: string,
  quizData: { title?: string; description?: string }
) => {
  return await prisma.quiz.update({
    where: { id },
    data: quizData,
  });
};

export const deleteQuiz = async (id: string) => {
  return await prisma.quiz.delete({ where: { id } });
};
