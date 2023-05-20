import { readFile } from "../01/scripts";
import { User } from "../types";

const filterUsers = (profession: string): User[] => {
    const db = readFile() as User[];

    const users = db.filter((user) => {
        return user.profissao === profession;
    });

    return users;
}

console.log(filterUsers('Programador'));