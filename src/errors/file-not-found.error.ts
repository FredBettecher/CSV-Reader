import { ApplicationError } from '../protocols';

export function fileNotFoundError(): ApplicationError {
    return {
        name: 'FileNotFoundError',
        message: 'File not provided',
    }
}
