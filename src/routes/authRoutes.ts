import { Router } from "express";
import { register, login } from "../controllers/authController";
import {
  validate,
  handleInputErrors,
} from "../middlewares/validationMiddleware";

const router = Router();

router.post("/register", validate("createUser"), handleInputErrors, register);
router.post("/login", validate("loginUser"), handleInputErrors, login);

export default router;
