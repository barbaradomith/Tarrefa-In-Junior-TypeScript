"use strict";
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
const pessoaExemplo = {
    nome: "Barbara",
    idade: 30,
    genero: "feminino"
};
console.log(apresentarPessoa(pessoaExemplo));
