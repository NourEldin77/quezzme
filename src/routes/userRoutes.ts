import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    res.json({ username: req.user.username });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
