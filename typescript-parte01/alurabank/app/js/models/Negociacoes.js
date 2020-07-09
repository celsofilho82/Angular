class Negociacoes {
    constructor() {
        // Classe criada para armazenar as negociações cadastradas no form
        // criada para encapsular o array com todas as negociações cadastradas
        // Usando programação defensiva, enviando a cópia de um array no método
        // paraArray
        // Tipificando o retorno dos métodos
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
