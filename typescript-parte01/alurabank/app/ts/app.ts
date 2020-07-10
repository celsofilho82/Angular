// Esse é o arquivo de main da aplicação

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
