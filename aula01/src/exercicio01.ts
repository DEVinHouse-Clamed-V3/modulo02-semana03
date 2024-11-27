const listaLivros: Array<{
  titulo: string;
  autor: string;
  anoPublicacao: Date;
  categorias: string[];
  disponivel: boolean;
}> = []

const listaAutores: Array<{
  nome: string;
  dataNascimento: Date;
  livrosEscritos: Array<string>;
}> = []


enum Categorias {
  Ficcao = "Ficção",
  NaoFiccao = "Não Ficção",
  Cientifico = "Cintífico",
  Programacao = "Programação",
}
  
function adicionarLivro(titulo: string, autor: string, anoPublicacao: Date, categorias: Array<string>, disponivel: boolean = true): void {
  listaLivros.push({
    titulo: titulo,
    autor: autor,
    anoPublicacao: anoPublicacao,
    categorias: categorias,
    disponivel: disponivel,
  });
}
  

function adicionarAutor(nome: string, dataNascimento: Date, livrosEscritos: Array<string>): void {
  listaAutores.push({
    nome: nome,
    dataNascimento: dataNascimento,
    livrosEscritos: livrosEscritos,
  });
}

adicionarLivro("Livro do Frank", "Frank", new Date("2024-11-25"), [Categorias.Programacao, Categorias.NaoFiccao])
adicionarLivro("Livro do Frank 2", "Frank", new Date("2024-11-26"), [Categorias.Programacao, Categorias.Cientifico], false)
adicionarAutor("Frank", new Date("1990-11-25"), ["Livro do Frank"])

console.log(listaLivros)
console.log(listaAutores)