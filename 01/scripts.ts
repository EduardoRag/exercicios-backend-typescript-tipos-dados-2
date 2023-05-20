import fs from 'fs';

export const readFile = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json', 'utf-8'));
}

export const writeFile = (user: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(user));
}