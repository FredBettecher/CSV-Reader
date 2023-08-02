import { Users } from '@prisma/client';
import { prisma } from '../../src/config/database';

function generateUsers() {
  return [
    { name: 'John Doe', city: 'New York', country: 'USA', favorite_sport: 'Basketball' },
    { name: 'Jane Smith', city: 'London', country: 'UK', favorite_sport: 'Football' },
    { name: 'Mike Johnson', city: 'Paris', country: 'France', favorite_sport: 'Tennis' },
    { name: 'Karen Lee', city: 'Tokyo', country: 'Japan', favorite_sport: 'Swimming' },
    { name: 'Tom Brown', city: 'Sydney', country: 'Australia', favorite_sport: 'Running' },
    { name: 'Emma Wilson', city: 'Berlin', country: 'Germany', favorite_sport: 'Basketball' },
  ];
}

export async function populateDB(): Promise<Users> {
  const users = generateUsers();
  for(const user of users) {
    return await prisma.users.create({ data: user });
  }
}
