import { ApplicationError } from '../protocols';

export function emptyDataError(): ApplicationError {
    return {
        name: 'EmptyDataError',
        message: 'No data found on file',
    };
}
