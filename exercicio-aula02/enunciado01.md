## Controlando pedidos

Você está desenvolvendo um sistema de pedidos para um restaurante. Cada pedido pode incluir o nome do cliente, o prato principal, e, opcionalmente, uma sobremesa. Além disso, há uma taxa de serviço padrão aplicada ao valor total.

Crie uma função chamada `criarPedido` com os seguintes parâmetros:

- `cliente` (obrigatório): nome do cliente (tipo string).
- `pratoPrincipal` (obrigatório): nome do prato principal (tipo string).
- `sobremesa` (opcional): nome da sobremesa (tipo string).
- `taxaServico` (opcional, valor padrão 10%): porcentagem aplicada sobre o valor total do pedido.

A função deve retornar uma mensagem com os detalhes do pedido. Exemplo:

Para um pedido com sobremesa:
```
Pedido de Maria: Prato Principal - Lasanha, Sobremesa - Pudim. Taxa de serviço: 10%.
```
Para um pedido sem sobremesa:
```
Pedido de João: Prato Principal - Pizza. Taxa de serviço: 5%.
```

Teste a função com diferentes combinações de parâmetros.

### Passo a Resolver:

1. Defina a função com os parâmetros necessários, usando:
    - `?` para marcar sobremesa como opcional.
    - Um valor padrão para `taxaServico`.

2. Retorne a mensagem no formato especificado.
3. Teste a função com:
    - Um pedido completo (cliente, prato principal, sobremesa, taxa de serviço).
    - Um pedido sem sobremesa.
    - Um pedido sem especificar a taxa de serviço.
