"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
const stream_1 = require("stream");
const readline_1 = __importDefault(require("readline"));
const index_1 = __importDefault(require("../repositories/index"));
const buffer_not_found_1 = require("../errors/buffer-not-found");
async function createFile(buffer) {
    if (!buffer)
        throw (0, buffer_not_found_1.bufferNotFoundError)();
    const readableFile = new stream_1.Readable();
    readableFile.push(buffer);
    readableFile.push(null);
    const readableLines = readline_1.default.createInterface({
        input: readableFile,
    });
    const users = [];
    let isFirstLine = true;
    for await (let line of readableLines) {
        if (isFirstLine) {
            isFirstLine = false;
            continue;
        }
        const splitLines = line.split(',');
        const newUser = await index_1.default.createFile(splitLines[0], splitLines[1], splitLines[2], splitLines[3]);
        users.push(newUser);
    }
    return users;
}
exports.createFile = createFile;
