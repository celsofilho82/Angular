abstract class View<T> {
    
    // Essa classe vai servir de herança para as classes NegociacoesView e MensagemView
    // aproveitando a reutilização de código.
    
    // Definimos essa classe como abstrata não permitindo criar instâncias dela e criamos um
    // método estático "template" que obriga as classes filhas a implementa-lo.
    
    // Essa clásse é do tipo genérico<T>, ou seja, é flexivél em relação ao tipo

    // Importamos as definições de tipo de JQuery no TypeScript e substituimos a manipulação
    // direta do DOM pelos métodos do JQuery

    private _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = $(seletor);
    }

    update(model: T){
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}