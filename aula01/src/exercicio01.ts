enum Categorias {
    Ficcao = "Ficção",
    NaoFiccao = "Não Ficção",
    Cientifico = "Cintífico",
    Programacao = "Programação",
  }
  
  const livro: {
    titulo: string;
    autor: string;
    anoPublicacao: Date;
    categorias: string[];
    disponivel: boolean;
  } = {
    titulo: "Aprendendo Algoritmos",
    autor: "Frank",
    anoPublicacao: new Date("1980-12-10"),
    categorias: [Categorias.Programacao, Categorias.Cientifico],
    disponivel: true,
  };
  
  console.log(livro.categorias[0]);
  
  const autor: {
    nome: string;
    dataNascimento: Date;
    livrosEscritos: Array<string>;
  } = {
    nome: "Frank",
    dataNascimento: new Date("1950-10-08"),
    livrosEscritos: ["O poderoso Frank", "O fraco Frank", "O mediano Frank"],
  };