interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

function resumirLivro(livro: Livro): string {
  return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

const livroExemplo: Livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
};

console.log(resumirLivro(livroExemplo));
