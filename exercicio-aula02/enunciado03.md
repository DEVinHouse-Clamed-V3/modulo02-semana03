## Controlando pedidos - parte 03

Agora que você implementou a classe `Pedido`, queremos tornar o sistema mais flexível e escalável. Para isso, vamos introduzir interfaces no TypeScript, permitindo definir contratos para os objetos usados no sistema.

1. Crie uma interface `IPedido` para definir os atributos de um pedido:
    - `cliente` (string): Nome do cliente.
    - `pratoPrincipal` (string): Nome do prato principal.
    - `sobremesa` (opcional - string): Nome da sobremesa.
    - `taxaServico` (opcional - number): Taxa de serviço com valor padrão de 10%.

2. Refatore a classe `Pedido` para implementar a interface `IPedido`. Certifique-se de que a classe cumpra o contrato definido pela interface.

3. Crie uma interface `IDetalhesPedido` para métodos relacionados a pedidos:
    - `detalhesPedido(): string`: Retorna os detalhes formatados do pedido.

4. Atualize a classe `Pedido` para implementar a interface `IDetalhesPedido` também.

5. Adicione um novo método na classe `Pedido`:
    - `calcularTotal(precoPrato: number, precoSobremesa?: number): number`
      - Este método deve calcular o total do pedido com base no preço do prato principal e da sobremesa (caso exista), aplicando a taxa de serviço.
