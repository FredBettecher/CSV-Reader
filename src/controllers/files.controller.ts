import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { createFile } from '../services/files.service';

export async function postFile(req: Request, res: Response, next: NextFunction): Promise<Response> {
  const file = req.file;

  try {
    const newFile = await createFile(file);
    return res.sendStatus(httpStatus.CREATED);
  } catch(error) {
    next(error);
  }
}
