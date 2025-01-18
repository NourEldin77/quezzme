"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var authMiddleware_1 = require("./middlewares/authMiddleware");
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var quizRoutes_1 = __importDefault(require("./routes/quizRoutes"));
var errorHandler_1 = require("./utils/errorHandler");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("../swagger.json"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, morgan_1["default"])("dev"));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.json({ message: "hello" });
});
app.use("/users", authMiddleware_1.protect, userRoutes_1["default"]);
app.use("/quizzes", authMiddleware_1.protect, quizRoutes_1["default"]);
app.use("/users", authMiddleware_1.protect, userRoutes_1["default"]);
app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
app.use("/auth", authRoutes_1["default"]);
app.use(errorHandler_1.errorHandler);
exports["default"] = app;
//# sourceMappingURL=server.js.map