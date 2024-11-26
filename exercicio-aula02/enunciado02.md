## Controlando pedidos - parte 02

No exercício anterior, você criou a função `criarPedido` para gerenciar pedidos em um restaurante. Agora, vamos refatorar o sistema utilizando classes para torná-lo mais organizado e orientado a objetos.

Crie uma classe `Pedido` com os seguintes atributos:

- `cliente` (string): Nome do cliente.
- `pratoPrincipal` (string): Nome do prato principal.
- `sobremesa` (string | undefined): Nome da sobremesa (opcional).
- `taxaServico` (number): Taxa de serviço com valor padrão de 10%.

Adicione os seguintes métodos à classe:

- `constructor`: Para inicializar os atributos.
- `detalhesPedido`: Retorna uma mensagem com os detalhes do pedido, no mesmo formato do exercício anterior:
    - Com sobremesa:
        - `"Pedido de Maria: Prato Principal - Lasanha, Sobremesa - Pudim. Taxa de serviço: 10%."`
    - Sem sobremesa:
        - `"Pedido de João: Prato Principal - Pizza. Taxa de serviço: 5%."`

Implemente a funcionalidade:
- Crie três instâncias da classe `Pedido` com diferentes combinações de atributos:
    - Um pedido completo com sobremesa e taxa de serviço personalizada.
    - Um pedido sem sobremesa e com taxa de serviço padrão.
    - Um pedido sem sobremesa e com taxa de serviço personalizada.
- Exiba os detalhes de cada pedido no console.
