import fs from 'fs';

type user = {
    name: string,
    age: number,
    status: 'active' | 'not active'
}

const writeFile = (user: user) => {
    const jsonUser = JSON.stringify(user);

    fs.writeFile('../bd.json', jsonUser, (error) => {
        if (error) {
            return console.log(error);
        }
    });
}

writeFile({
    name: 'Eduardo',
    age: 26,
    status: 'active'
});

const readFile = (): user => {
    const fileData = fs.readFileSync('../bd.json', 'utf-8');

    const userDb = JSON.parse(fileData);

    return userDb;
}

console.log(readFile());