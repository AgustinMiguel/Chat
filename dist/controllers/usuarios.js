"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = (req, res) => {
    res.json({
        msg: 'getUsers'
    });
};
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsers',
        id
    });
};
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUser',
        body
    });
};
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body
    });
};
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
};
//# sourceMappingURL=usuarios.js.map