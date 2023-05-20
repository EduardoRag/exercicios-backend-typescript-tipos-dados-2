import { readFile, writeFile } from "../01/scripts";
import { User } from "../types";

const updateUser = (cpf: string, data: User): User => {
    const users = readFile() as User[];

    const userFound = users.find((user) => {
        return user.cpf === cpf;
    });

    if (!userFound) {
        throw new Error('User not found');
    }

    Object.assign(userFound, data);

    writeFile(users);

    return data;
}

const usuario = {
    nome: 'Jao',
    email: 'Jao@email.com',
    cpf: '100.000.000-00',
    profissao: 'Tester',
    endereco: {
        cep: '000000-000',
        rua: 'teste',
        bairro: 'teste',
        cidade: 'teste',
        completemento: 'casa'
    }
}

console.log(updateUser('100.000.000-00', usuario));