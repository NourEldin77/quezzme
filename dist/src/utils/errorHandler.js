"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error: ".concat(err.message) });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map