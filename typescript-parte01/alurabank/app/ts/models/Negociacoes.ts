class Negociacoes {

    // Classe criada para armazenar as negociações cadastradas no form
    // criada para encapsular o array com todas as negociações cadastradas

    // Usando programação defensiva, enviando a cópia de um array no método
    // paraArray
    
    // Tipificando o retorno dos métodos

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }
}