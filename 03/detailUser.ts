import { User } from "../types";
import { readFile } from "../01/scripts";

const getUser = (cpf: string): User => {
    const data = readFile() as User[];

    const userFound = data.find((user) => {
        return user.cpf === cpf;
    });

    if (!userFound) {
        throw new Error('User not found');
    }

    return userFound;
}

console.log(getUser('123.456.789-12'));