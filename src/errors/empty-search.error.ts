import { ApplicationError } from '../protocols';

export function emptySearchError(): ApplicationError {
    return {
        name: 'EmptySearchError',
        message: 'No matching results were found',
    };
}
