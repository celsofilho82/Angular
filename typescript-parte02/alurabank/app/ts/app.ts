// Esse é o arquivo de main da aplicação

// Importando a classe Negociação controller
import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
