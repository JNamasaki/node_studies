const livros = require("./livros");
const menorValor = require("./valor")

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);
    let livroAtual = livros[atual];
    console.log("livro Atual: ", livroAtual);
    let livroMenorPreco = livros[menor];
    console.log("livro Menor Preço: ", livroMenorPreco);
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);