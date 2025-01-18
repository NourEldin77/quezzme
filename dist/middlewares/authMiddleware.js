"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.protect = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var protect = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        return res.status(401).json({ error: "Not authorized" });
    }
    var _a = bearer.split(" "), token = _a[1];
    if (!token) {
        return res.status(403).json({ error: "Not a valid token" });
    }
    try {
        var user = jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Not a valid token" });
    }
};
exports.protect = protect;
//# sourceMappingURL=authMiddleware.js.map