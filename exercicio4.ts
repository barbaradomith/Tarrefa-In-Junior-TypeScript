interface Usuario {
  nome: string;
  email: string;
  exibirInfo(): string;
}

const usuario: Usuario = {
  nome: "Barbara",
  email: "barbaradomith@id.uff.br",
  exibirInfo() {
    return `Nome: ${this.nome} - Email: ${this.email}`;
  }
};

console.log(usuario.exibirInfo());
