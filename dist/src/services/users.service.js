"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTerm = void 0;
const invalid_term_error_1 = require("../errors/invalid-term.error");
const index_1 = __importDefault(require("../repositories/index"));
const empty_research_error_1 = require("../errors/empty-research-error");
async function searchTerm(term) {
    if (!term)
        throw (0, invalid_term_error_1.invalidTermError)();
    const result = await index_1.default.searchInFile(term);
    if (result.length === 0)
        throw (0, empty_research_error_1.emptyResearchErrorError)();
    return result;
}
exports.searchTerm = searchTerm;
