import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../protocols';
import httpStatus from 'http-status';

const errors = {
    InternalServerError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(
            'Internal server error'
        );
    },

    FileNotFoundError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.BAD_REQUEST).send({
            name: err.name,
            message: err.message,
        });
    },

    InvalidFileError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.NOT_ACCEPTABLE).send({
            name: err.name,
            message: err.message,
        });
    },

    EmptyDataError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.BAD_REQUEST).send({
            name: err.name,
            message: err.message,
        });
    },

    InvalidTermError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.BAD_REQUEST).send({
            name: err.name,
            message: err.message,
        });
    },

    EmptySearchError(err: ApplicationError, res: Response) {
        return res.status(httpStatus.NOT_FOUND).send({
            name: err.name,
            message: err.message,
        });
    },
};

export function handleApplicationErrors(err: ApplicationError, _req: Request, res:Response, _next: NextFunction) {
    try {
        errors[err.name](err, res);
    } catch(error) {
        errors['InternalServerError'](err, res);
    }
}
