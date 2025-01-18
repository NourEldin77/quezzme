import { Request, Response } from "express";
export declare const getAllQuizzes: (req: Request, res: Response) => Promise<void>;
export declare const getQuizById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createQuiz: (req: Request, res: Response) => Promise<void>;
export declare const updateQuiz: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteQuiz: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
