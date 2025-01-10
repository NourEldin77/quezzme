import { error } from "console";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ error: "Not authorized" });
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    return res.status(403).json({ error: "Not a valid token" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Not a valid token" });
  }
};
