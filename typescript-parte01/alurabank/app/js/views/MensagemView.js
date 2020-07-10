class MensagemView extends View {
    // Nesta classe teremos o template para mostrar uma mensagem quando o usuário
    // insere uma nova negociação no sistema
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
