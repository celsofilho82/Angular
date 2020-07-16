System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaDaSemanda;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (data.getDay() == DiaDaSemanda.Sabado || data.getDay() == DiaDaSemanda.Domingo) {
                        this._mensagemView.update("Negociações somente em dias úteis");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação Adicionada com sucesso!!!");
                    this._negociacoes.paraArray().forEach(negociacao => {
                        console.log(negociacao.data);
                        console.log(negociacao.quantidade);
                        console.log(negociacao.valor);
                    });
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemanda) {
                DiaDaSemanda[DiaDaSemanda["Domingo"] = 0] = "Domingo";
                DiaDaSemanda[DiaDaSemanda["Segunda"] = 1] = "Segunda";
                DiaDaSemanda[DiaDaSemanda["Terca"] = 2] = "Terca";
                DiaDaSemanda[DiaDaSemanda["Quarta"] = 3] = "Quarta";
                DiaDaSemanda[DiaDaSemanda["Quinta"] = 4] = "Quinta";
                DiaDaSemanda[DiaDaSemanda["Sexta"] = 5] = "Sexta";
                DiaDaSemanda[DiaDaSemanda["Sabado"] = 6] = "Sabado";
            })(DiaDaSemanda || (DiaDaSemanda = {}));
        }
    };
});
