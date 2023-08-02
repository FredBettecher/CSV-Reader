import { Readable } from 'stream';
import readline from 'readline';
import usersRepository from '../repositories/index';
import { Users } from '@prisma/client';
import { invalidFileError } from '../errors/invalid-file.error';
import { emptyDataError } from '../errors/empty-data.error';
import { fileNotFoundError } from '../errors/file-not-found.error';

export async function createFile(file: Express.Multer.File): Promise<Users[]> {
  if(!file) throw fileNotFoundError();
  if(!file.originalname.endsWith('.csv')) throw invalidFileError();

  const { buffer } = file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  if(readableFile.readableLength === 0) throw emptyDataError();

  const readableLines = readline.createInterface({
    input: readableFile,
  });

  const users: Users[] = [];
  let isFirstLine = true;
  for await (let line of readableLines) {
    if(isFirstLine) {
      isFirstLine = false;
      continue;
    }

    const splitLines = line.split(',');

    const newUser = await usersRepository.createFile(splitLines[0], splitLines[1], splitLines[2], splitLines[3]);
    users.push(newUser);
  }

  return users;
}
