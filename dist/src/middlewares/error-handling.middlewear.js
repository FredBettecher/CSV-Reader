"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApplicationErrors = void 0;
const http_status_1 = __importDefault(require("http-status"));
const errors = {
    InternalServerError(err, res) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send('Internal server error');
    },
    InvalidFileError(err, res) {
        return res.status(http_status_1.default.NOT_ACCEPTABLE).send({
            name: err.name,
            message: err.message,
        });
    },
    BufferNotFoundError(err, res) {
        return res.status(http_status_1.default.NOT_FOUND).send({
            name: err.name,
            message: err.message,
        });
    },
    InvalidTermError(err, res) {
        return res.status(http_status_1.default.NOT_FOUND).send({
            name: err.name,
            message: err.message,
        });
    },
    EmptyResearchError(err, res) {
        return res.status(http_status_1.default.NOT_FOUND).send({
            name: err.name,
            message: err.message,
        });
    },
};
function handleApplicationErrors(err, _req, res, _next) {
    try {
        errors[err.name](err, res);
    }
    catch (error) {
        errors['InternalServerError'](err, res);
    }
}
exports.handleApplicationErrors = handleApplicationErrors;
