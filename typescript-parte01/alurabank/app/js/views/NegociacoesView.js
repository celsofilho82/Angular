class NegociacoesView extends View {
    // Nesta classe teremos o template para mostrar as negociacoes para o usuário
    // No construtor da classe recebemos como parametro o elemento do DOM
    // Neste elemento vamos inserir o nosso template que neste caso é uma tabela
    // O método update é responsável por fazer essa inserção no DOM que recebe um array de negociações
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
                ${model.paraArray().map(negociacao => {
            return `
                        <tr>
                            <td>${negociacao.data.getDate()}/
                                ${negociacao.data.getMonth() + 1}/
                                ${negociacao.data.getFullYear()}
                            </td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `;
        }).join('')}
            <tfoot>
            </tfoot>
        </table>       
        `;
    }
}
