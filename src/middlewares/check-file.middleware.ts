import { invalidFileError } from '../errors/invalid-file.error';
import { NextFunction, Request, Response } from 'express';
import { MulterError } from 'multer';
import { ApplicationError } from '../protocols';
import { fileNotFoundError } from '../errors/file-not-found.error';

export async function checkFile(err: ApplicationError, req: Request, res: Response, next: NextFunction) {
  try {
    if(!req.file) throw fileNotFoundError();

    if(err instanceof MulterError) {
      if(err.code === 'LIMIT_UNEXPECTED_FILE') throw invalidFileError();
    }
    
    next();
  } catch(error) {
    next(error);
  }
}
