
import { MensagemView, NegociacoesView } from "../views/index";
import { Negociacao, Negociacoes, NegociacaoParcial } from "../models/index";
import { domInject, throttle} from "../helpers/decorators/index";
import { NegociacaoService } from "../services/index";
import { imprime } from '../helpers/index';

export class NegociacaoController {

    // Criando uma classe controller que será responsável 
    // por obter os campos do formulário do DOM

    // Como o querySelector retorna um objeto do tipo element<Genérico>, devemos fazer um casting
    // explicito para que o objeto seja de um tipo mais especifico <HTMLInputElement>
    
    // Também devemos definir o tipo de objeto da propriedade para um mais especifico HTMLInputElement

    // Estamos recebendo do form uma data como string no formato "dd-mm-yyyy",
    // temos que transformar-la em um valor aceitável para o contrutor de Date "dd,mm,yyyy"

    // Estamos recebendo do form a quantidade e o valor como string, precisamos fazer uma
    // parse para transformamos em valores númericos e float

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
           
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (data.getDay() == DiaDaSemanda.Sabado || data.getDay() == DiaDaSemanda.Domingo) {
            this._mensagemView.update("Negociações somente em dias úteis")
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação Adicionada com sucesso!!!");
        imprime(negociacao, this._negociacoes);

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }

    @throttle()
    async importaDados() {

        try {

           // usou await antes da chamada de this.service.obterNegociacoes()

            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {

                    if(res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                });

            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);

        } catch(err) {
            this._mensagemView.update(err.message);
        }
    }

}

enum DiaDaSemanda{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}