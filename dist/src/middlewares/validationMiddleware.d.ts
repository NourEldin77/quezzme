import { Request, Response, NextFunction } from "express";
export declare const validate: (method: string) => import("express-validator").ValidationChain[];
export declare const handleInputErrors: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
