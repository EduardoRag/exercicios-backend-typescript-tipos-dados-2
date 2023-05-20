type Endereco = {
    cep: string,
    rua: string,
    complemento?: string
    bairro: string,
    cidade: string,
}

export type User = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null,
}