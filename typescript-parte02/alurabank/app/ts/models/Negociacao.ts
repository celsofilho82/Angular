export class Negociacao {
    // Criando uma classe que representa o modelo de negociação

    // Definindo as propriedades da classe e os modificadores de acesso
    // Os tipos estão definidos no arquivos .tsd TypeScript definitions

    // Podemos usar o readonly para definir objetos cuja a propriedade não
    // pode receber alteração com isso, não precisamos definir os getters e setters

    readonly data: Date;
    readonly quantidade: number;
    readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;      
    }

    get volume(){
        return this.quantidade * this.valor;
    }       

}