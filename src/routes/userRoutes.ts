import { Router } from "express";
import { Request, Response } from "express";
import { protect } from "../middlewares/authMiddleware";
import exp from "constants";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  res.json({ username: req.user });
});

export default router;
