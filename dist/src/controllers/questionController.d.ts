import { Request, Response } from "express";
export declare const getAllQuestionsForQuiz: (req: Request, res: Response) => Promise<void>;
export declare const getQuestionById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addQuestionToQuiz: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateQuestion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteQuestion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
