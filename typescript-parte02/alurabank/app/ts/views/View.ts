// No ECMAScpript6, todo arquivos JS que você cria é um módulo por padrão.
// Como os arquivos TypeScrip serão compilados para JS então, todos eles serão módulos
// Por ser um módulo, é necessário indicar os métodos que ele exporta

// Exportando a classe View
export abstract class View<T> {
    
    // Essa classe vai servir de herança para as classes NegociacoesView e MensagemView
    // aproveitando a reutilização de código.
    
    // Definimos essa classe como abstrata não permitindo criar instâncias dela e criamos um
    // método estático "template" que obriga as classes filhas a implementa-lo.
    
    // Essa clásse é do tipo genérico<T>, ou seja, é flexivél em relação ao tipo

    // Importamos as definições de tipo de JQuery no TypeScript e substituimos a manipulação
    // direta do DOM pelos métodos do JQuery

    // Trabalhando com parametros opcionais no contrutor da classe usamos o simbolo "?" para
    // definir que esse parâmetro é opcional.

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar
    }

    update(model: T){
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(model: T): string;

}


