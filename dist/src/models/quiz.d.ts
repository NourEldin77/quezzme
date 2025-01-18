export declare const getAllQuizzes: () => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    title: string;
    description: string;
    userId: string;
    fileUrl: string;
}, unknown, never> & {})[]>;
export declare const getQuizById: (id: string) => Promise<{
    questions: ({
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
    }, unknown, never> & {})[];
} & import("@prisma/client/runtime").GetResult<{
    id: string;
    title: string;
    description: string;
    userId: string;
    fileUrl: string;
}, unknown, never> & {}>;
export declare const createQuiz: (quizData: {
    title: string;
    description: string;
    userId: string;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    title: string;
    description: string;
    userId: string;
    fileUrl: string;
}, unknown, never> & {}>;
export declare const updateQuiz: (id: string, quizData: {
    title?: string;
    description?: string;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    title: string;
    description: string;
    userId: string;
    fileUrl: string;
}, unknown, never> & {}>;
export declare const deleteQuiz: (id: string) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    title: string;
    description: string;
    userId: string;
    fileUrl: string;
}, unknown, never> & {}>;
