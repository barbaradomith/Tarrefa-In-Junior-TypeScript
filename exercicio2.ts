type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: StatusRequisicao): string {
  switch (status) {
    case "sucesso":
      return "Requisição concluída com sucesso.";
    case "erro":
      return "Ocorreu um erro na requisição.";
    case "carregando":
      return "Aguarde... carregando dados.";
  }
}

console.log(mostrarMensagemStatus("carregando"));
