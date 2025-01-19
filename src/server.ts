import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Request, Response } from "express";
import { protect } from "./middlewares/authMiddleware";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import quizRoutes from "./routes/quizRoutes";
import { errorHandler } from "./utils/errorHandler";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.use("/users", protect, userRoutes);
app.use("/quizzes", protect, quizRoutes);
app.use("/users", protect, userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/auth", authRoutes);
app.use(errorHandler);

export default app;
