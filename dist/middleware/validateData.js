"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
const { validationResult } = require('express-validator');
const validateData = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validateData = validateData;
//# sourceMappingURL=validateData.js.map