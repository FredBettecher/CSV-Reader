"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const files_controller_1 = require("../controllers/files.controller");
const users_controller_1 = require("../controllers/users.controller");
const multerConfig = (0, multer_1.default)();
const apiRouter = (0, express_1.Router)();
apiRouter
    .post('/files', multerConfig.single('file'), files_controller_1.postFile)
    .get('/users', users_controller_1.getUsers);
exports.default = apiRouter;
