import { QuestionType } from "@prisma/client";
export declare const addQuestionToQuiz: (quizId: string, questionData: {
    text: string;
    questionType: QuestionType;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    quizId: string;
    questionType: "MCQ";
}, unknown, never> & {}>;
export declare const getAllQuestionsForQuiz: (quizId: string) => Promise<({
    answers: (import("@prisma/client/runtime").GetResult<{
        id: string;
        text: string;
        isCorrect: boolean;
        questionId: string;
    }, unknown, never> & {})[];
} & import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    quizId: string;
    questionType: "MCQ";
}, unknown, never> & {})[]>;
export declare const getQuestionById: (questionId: string) => Promise<{
    answers: (import("@prisma/client/runtime").GetResult<{
        id: string;
        text: string;
        isCorrect: boolean;
        questionId: string;
    }, unknown, never> & {})[];
} & import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    quizId: string;
    questionType: "MCQ";
}, unknown, never> & {}>;
export declare const updateQuestion: (questionId: string, questionData: {
    text?: string;
    questionType?: QuestionType;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    quizId: string;
    questionType: "MCQ";
}, unknown, never> & {}>;
export declare const deleteQuestion: (questionId: string) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    quizId: string;
    questionType: "MCQ";
}, unknown, never> & {}>;
