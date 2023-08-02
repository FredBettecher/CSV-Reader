import { ApplicationError } from '../protocols';

export function emptyResearchError(): ApplicationError {
    return {
        name: 'EmptyResearchError',
        message: 'No matching results were found',
    };
}
