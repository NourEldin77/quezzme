"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var validationMiddleware_1 = require("../middlewares/validationMiddleware");
var router = (0, express_1.Router)();
router.post("/register", (0, validationMiddleware_1.validate)("createUser"), validationMiddleware_1.handleInputErrors, authController_1.register);
router.post("/login", (0, validationMiddleware_1.validate)("loginUser"), validationMiddleware_1.handleInputErrors, authController_1.login);
exports["default"] = router;
//# sourceMappingURL=authRoutes.js.map