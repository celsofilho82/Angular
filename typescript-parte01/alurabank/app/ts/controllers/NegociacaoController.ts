class NegociacaoController {

    // Criando uma classe controller que será responsável 
    // por obter os campos do formulário do DOM

    // Como o querySelector retorna um objeto do tipo element<Genérico>, devemos fazer um casting
    // explicito para que o objeto seja de um tipo mais especifico <HTMLInputElement>
    
    // Também devemos definir o tipo de objeto da propriedade para um mais especifico HTMLInputElement

    // Estamos recebendo do form uma data como string no formato "dd-mm-yyyy",
    // temos que transformar-la em um valor aceitável para o contrutor de Date "dd,mm,yyyy"

    // Estamos recebendo do form a quantidade e o valor como string, precisamos fazer uma
    // parse para transformamos em valores númericos e float

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }

}