"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const validateJwt_1 = require("../middleware/validateJwt");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', users_1.getUser);
router.post('/', users_1.postUser);
router.put('/:id', [
    validateJwt_1.validateJtw
], users_1.putUser);
router.delete('/:id', [
    validateJwt_1.validateJtw
], users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map