import { Request, Response, NextFunction } from "express";
interface UserPayload {
    userId: string;
    username: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}
export declare const protect: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export {};
