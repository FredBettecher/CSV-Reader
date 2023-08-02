"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importStar(require("../src/app"));
const database_1 = require("../src/config/database");
const supertest_1 = __importDefault(require("supertest"));
const http_status_1 = __importDefault(require("http-status"));
beforeAll(async () => {
    await (0, app_1.init)();
});
beforeEach(async () => {
    await database_1.prisma.users.deleteMany({});
});
const server = (0, supertest_1.default)(app_1.default);
describe('POST /api/files', () => {
    it('should respond with status 406 if file format is not CSV', async () => {
        const response = (await server.post('/api/files')).files('example.pdf');
        expect(response.status).toBe(http_status_1.default.NOT_ACCEPTABLE);
    });
    it('should respond with status 404 if file was not found', async () => {
        const response = (await server.post('/api/files')).files();
        expect(response.status).toBe(http_status_1.default.NOT_FOUND);
    });
});
