/**
Seleciona as pessoas cuja idade � maior que idadeLimite.
pessoas: [pessoa.Pessoa]
idadeLimite: number
retorna: [pessoa.Pessoa]
*/
function selecionaPessoas (pessoas, idadeLimite) {
  //FIXME Deve retornar apenas as pessoas cuja idade seja superior a idade limite.
  
  let ret  = pessoas.filter(function(p) {
  	return p.idade > idadeLimite
  });
  return ret
}

export {selecionaPessoas}
