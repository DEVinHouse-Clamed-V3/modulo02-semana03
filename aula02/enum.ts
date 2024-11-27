enum Status {
    Novo = "Nova Tarefa", // 0
    EmAndamento = "Tarefa em Andamento", // 10
    Bloqueado = "Tarefa em bloqueado", // 20
    EmRevisao = "Tarefa em revisão", // 30
    Concluido = "Tarefa concluída" // 40
}

let statusAtual = Status.EmAndamento

if(statusAtual == Status.EmAndamento){

}

console.log(statusAtual)