"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const users_service_1 = require("../services/users.service");
async function getUsers(req, res, next) {
    const { term } = req.query;
    try {
        const foundTerm = await (0, users_service_1.searchTerm)(term);
        return res.status(http_status_1.default.OK).send(foundTerm);
    }
    catch (error) {
        next(error);
    }
}
exports.getUsers = getUsers;
