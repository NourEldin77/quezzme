import { Request, Response } from "express";
export declare const getAllAnswersForQuestion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAnswerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addAnswerToQuestion: (req: Request, res: Response) => Promise<void>;
export declare const updateAnswer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteAnswer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
