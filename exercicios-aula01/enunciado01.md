# Exercício: Modelagem de Dados com Tipos e Interfaces

## Enunciado

Você está desenvolvendo um sistema para organizar os dados de uma biblioteca. A tarefa é criar a tipagem para representar livros, autores e categorias no TypeScript, sem usar funções, apenas tipos e interfaces.

## Requisitos

### Livro

Um livro deve ter as seguintes propriedades:
- **titulo** (string): O título do livro.
- **autor** (string): Nome do autor.
- **anoPublicacao** (number): O ano em que o livro foi publicado.
- **categorias** (array de strings): Uma lista de categorias associadas ao livro.
- **disponivel** (boolean): Indica se o livro está disponível para empréstimo.

### Autor

Um autor deve ter as seguintes propriedades:
- **nome** (string): Nome completo do autor.
- **dataNascimento** (Date): Data de nascimento do autor.
- **livrosEscritos** (array de strings): Títulos dos livros que ele escreveu.

### Categoria

Cada categoria deve ser representada como um tipo literal:
- Ficcao
- NaoFiccao
- Cientifico
- Biografia
- Fantasia

## Criação de Exemplos

Instancie pelo menos:
- Três livros diferentes.
- Dois autores diferentes.
- Uma lista de categorias.

## Objetivos do Exercício

- Treinar o uso de interfaces e tipos no TypeScript.
- Praticar a modelagem de dados de forma tipada.
- Trabalhar com arrays, tipos literais e relações entre entidades.