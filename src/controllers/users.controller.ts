import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { searchTerm } from '../services/users.service';

export async function getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {
  const { term } = req.query as { term: string };

  try {
    const foundTerm = await searchTerm(term);
    return res.status(httpStatus.OK).send(foundTerm);
  } catch(error) {
    next(error);
  }
}
