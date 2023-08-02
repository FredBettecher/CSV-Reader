import app, { init } from '../src/app'
import { prisma } from '../src/config/database';
import supertest from 'supertest';
import httpStatus from 'http-status';
import fs from 'fs';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await prisma.users.deleteMany({});
});

afterEach(() => {
  if(fs.existsSync('example.txt')) {
    fs.rmSync('example.txt');
  }

  if(fs.existsSync('example.csv')) {
    fs.rmSync('example.csv');
  }
})

const server = supertest(app);

const content = `name,city,country,favorite_sport
John Doe,New York,USA,Basketball
Jane Smith,London,UK,Football
Mike Johnson,Paris,France,Tennis
Karen Lee,Tokyo,Japan,Swimming
Tom Brown,Sydney,Australia,Running
Emma Wilson,Berlin,Germany,Basketball`

describe('POST /api/files', () => {
  it('should respond with status 400 if file was not provided', async () => {
    const response = await server.post('/api/files');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 406 if file format is not CSV', async () => {
    fs.writeFileSync('example.txt', '');
    const response = await server.post('/api/files').attach('file', 'example.txt');

    expect(response.status).toBe(httpStatus.NOT_ACCEPTABLE);
  });

  it('should respond with status 204 if file is empty', async () => {
    fs.writeFileSync('example.csv', '');
    const response = await server.post('/api/files').attach('file', 'example.csv');

    expect(response.status).toBe(httpStatus.NO_CONTENT);
  });

  it('should respond with status 201 if there is a file with data', async () => {
    fs.writeFileSync('example.csv', content);
    const response = await server.post('/api/files').attach('file', 'example.csv');

    expect(response.status).toBe(httpStatus.CREATED);
  });
});
