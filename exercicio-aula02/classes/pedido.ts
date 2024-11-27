class Pedido {
    cliente: string;
    pratoPrincipal: string;
    sobremesa: string | undefined;
    taxaServico: number;

    constructor(clienteP: string, pratoPrincipalP: string, sobremesaP?: string, taxaServicoP: number = 10){
        this.cliente = clienteP;
        this.pratoPrincipal = pratoPrincipalP;
        this.sobremesa = sobremesaP;
        this.taxaServico = taxaServicoP;
    }

    detalhesPedido(): string{
        if(!!this.sobremesa){
            return `Pedido de ${this.cliente}: Prato Principal - ${this.pratoPrincipal}, Sobremesa - ${this.sobremesa}. Taxa de serviço: ${this.taxaServico}%.`
        } else {
            return `Pedido de ${this.cliente}: Prato Principal - ${this.pratoPrincipal}, Taxa de serviço: ${this.taxaServico}%.`
        }
    }
}

export default Pedido;