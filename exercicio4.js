"use strict";
const usuario = {
    nome: "Barbara",
    email: "barbaradomith@id.uff.br",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};
console.log(usuario.exibirInfo());
