import { ApplicationError } from '../protocols';

export function invalidTermError(): ApplicationError {
    return {
        name: 'InvalidTermError',
        message: 'Term not provided',
    }
}
