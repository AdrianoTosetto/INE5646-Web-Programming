function consultaInicial (res, dados) {
  res.render('index', dados)
}

function consultaPesquisaPorAltura (req, res, dados) {
  // FIXME obter a altura mínima enviada na requisição
  console.log(req.param("altura_minima"))
  const alturaMinima = req.param("altura_minima")
  const atletas = dados.equipe.encontreAtletasComAlturmaMinima(alturaMinima)
  const resposta = {
    nome: dados.equipe.nome,
    titulo: dados.titulo,
    alturaMinima,
    atletas
  }
  res.render('resposta', resposta)
}

export {consultaInicial, consultaPesquisaPorAltura}
