export declare const addAnswerToQuestion: (questionId: string, answerData: {
    text: string;
    isCorrect: boolean;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    isCorrect: boolean;
    questionId: string;
}, unknown, never> & {}>;
export declare const getAllAnswersForQuestion: (questionId: string) => Promise<(import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    isCorrect: boolean;
    questionId: string;
}, unknown, never> & {})[]>;
export declare const getAnswerById: (answerId: string) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    isCorrect: boolean;
    questionId: string;
}, unknown, never> & {}>;
export declare const updateAnswer: (answerId: string, answerData: {
    text?: string;
    isCorrect?: boolean;
}) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    isCorrect: boolean;
    questionId: string;
}, unknown, never> & {}>;
export declare const deleteAnswer: (answerId: string) => Promise<import("@prisma/client/runtime").GetResult<{
    id: string;
    text: string;
    isCorrect: boolean;
    questionId: string;
}, unknown, never> & {}>;
