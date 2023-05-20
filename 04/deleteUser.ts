import { readFile, writeFile } from "../01/scripts";
import { User } from "../types";

const deleteUser = (cpf: string): User => {
    const db = readFile() as User[];

    const userFound = db.find((user) => {
        return user.cpf === cpf;
    });

    if (!userFound) {
        throw new Error('User not found');
    }

    const newDb = db.filter((user) => {
        return user !== userFound;
    });

    writeFile(newDb);

    return userFound;
}

console.log(deleteUser('100.000.000-00'));