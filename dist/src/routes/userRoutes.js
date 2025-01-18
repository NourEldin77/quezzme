"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/me", function (req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        res.json({ username: req.user.username });
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});
exports["default"] = router;
//# sourceMappingURL=userRoutes.js.map