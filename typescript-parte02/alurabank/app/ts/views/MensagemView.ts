// Importando a classe abstrata View para que possamos extende-la
import { View } from "./View";

// Exportando a classe Mensagem View
export class MensagemView extends View<string>{

    // Nesta classe teremos o template para mostrar uma mensagem quando o usuário
    // insere uma nova negociação no sistema

    template(model: string): string{
        return `<p class="alert alert-info">${model}</p>`
    }

}
