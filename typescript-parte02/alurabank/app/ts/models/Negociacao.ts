import { Imprimivel } from './Imprimivel';
import { Igualavel } from './index';

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {
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
    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }

    get volume(){
        return this.quantidade * this.valor;
    } 
    
    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}