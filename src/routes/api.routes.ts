import { Router } from 'express';
import multer from 'multer';
import { postFile } from '../controllers/files.controller';
import { getUsers } from '../controllers/users.controller';
import { checkFile } from '../middlewares/check-file.middleware';

const multerConfig = multer();

const apiRouter = Router();

apiRouter
  .post('/files', multerConfig.single('file'), checkFile, postFile)
  .get('/users', getUsers);

export default apiRouter;
