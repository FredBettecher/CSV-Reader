"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFile = void 0;
const http_status_1 = __importDefault(require("http-status"));
const invalid_file_error_1 = require("../errors/invalid-file-error");
const files_service_1 = require("../services/files.service");
async function postFile(req, res, next) {
    const { file } = req;
    const { buffer } = file;
    try {
        if (!file.originalname.endsWith('.csv'))
            throw (0, invalid_file_error_1.invalidFileError)();
        const newFile = await (0, files_service_1.createFile)(buffer);
        return res.status(http_status_1.default.CREATED).send(newFile);
    }
    catch (error) {
        next(error);
    }
}
exports.postFile = postFile;
