import { prisma } from '../src/config/database';
import app, { init } from '../src/app';
import supertest from 'supertest';
import httpStatus from 'http-status';
import { populateDB } from './factories/users.factory';

beforeAll(async () => {
  await init();
  await prisma.users.deleteMany({});
  await populateDB();
});

afterAll(async () => {
  await prisma.users.deleteMany({});
});

const server = supertest(app);

describe('GET /api/users', () => {
  it('should respond with status 400 if term was not provided', async () => {
    const response = await server.get('/api/users').query('');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 404 if term was not found', async () => {
    const response = await server.get('/api/users').query({ term: 'zzz' });

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 if term is found', async () => {
    const response = await server.get('/api/users').query({ term: 'USA' });

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toHaveLength(1);
  });
});
