"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const validateData_1 = require("../middleware/validateData");
const validateJwt_1 = require("../middleware/validateJwt");
const router = (0, express_1.Router)();
router.post('/login', [(0, express_validator_1.check)('email', 'mail is required').isEmail(),
    validateData_1.validateData], auth_1.login);
router.get('/', [validateJwt_1.validateJtw], auth_1.renewToken);
exports.default = router;
//# sourceMappingURL=auth.js.map