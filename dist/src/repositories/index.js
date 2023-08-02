"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
async function createFile(name, city, country, favorite_sport) {
    return database_1.prisma.users.create({
        data: {
            name: name,
            city: city,
            country: country,
            favorite_sport: favorite_sport,
        },
    });
}
async function searchInFile(term) {
    return await database_1.prisma.users.findMany({
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
exports.default = usersRepository;
