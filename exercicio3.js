"use strict";
function resumirLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}
const livroExemplo = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
};
console.log(resumirLivro(livroExemplo));
