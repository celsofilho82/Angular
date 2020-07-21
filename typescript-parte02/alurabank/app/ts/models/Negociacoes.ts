// Importando a classe modelo Negociacao
import { Negociacao } from "./Negociacao";
import { logarTempoDeExecucao } from "../helpers/decorators/index";

export class Negociacoes {

    // Classe criada para armazenar as negociações cadastradas no form
    // criada para encapsular o array com todas as negociações cadastradas

    // Usando programação defensiva, enviando a cópia de um array no método
    // paraArray
    
    // Tipificando o retorno dos métodos

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @logarTempoDeExecucao()
    paraArray(): Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}