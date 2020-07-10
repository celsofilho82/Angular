abstract class View<T> {
    
    // Essa classe vai servir de herança para as classes NegociacoesView e MensagemView
    // aproveitando a reutilização de código.
    // Definimos essa classe como abstrata não permitindo criar instâncias dela e criamos um
    // método estático "template" que obriga as classes filhas a implementa-lo.
    // Essa clásse é do tipo genérico<T>, ou seja, é flexivél em relação ao tipo

    private _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    update(model: T){
        this._elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;

}