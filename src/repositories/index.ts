import { Users } from '@prisma/client';
import { prisma } from '../config/database';

async function createFile(name: string, city: string, country: string, favorite_sport: string): Promise<Users> {
  return prisma.users.create({
    data: {
      name: name,
      city: city,
      country: country,
      favorite_sport: favorite_sport,
    },
  });
}

async function searchInFile(term: string): Promise<Users[]> {
  return prisma.users.findMany({
    where: {
      OR: [
        { id: { contains: term } },
        { name: { contains: term } },
        { city: { contains: term } },
        { country: { contains: term } },
        { favorite_sport: { contains: term } },
      ],
    },
  });
}

const usersRepository = {
  createFile,
  searchInFile,
};

export default usersRepository;
