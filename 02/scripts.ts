import { writeFile, readFile } from "../01/scripts";
import { User } from "../types";

const registerUser = (user: User): User => {
    const data = readFile() as User[];

    data.push(user);

    writeFile(data);

    return user;
}

const listUsers = (): User[] => {
    return readFile() as User[];
}

const usuario = {
    nome: 'Jao',
    email: 'Jao@email.com',
    cpf: '000.000.000-00',
    profissao: 'QA',
    endereco: {
        cep: '000000-000',
        rua: 'teste',
        bairro: 'teste',
        cidade: 'teste',
        completemento: 'casa'
    }
}

console.log(registerUser(usuario));
console.log(listUsers());