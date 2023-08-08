function acessar() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginSenha = document.getElementById("loginSenha").value;

  if (!loginEmail || !loginSenha) {
    alert("favor preencha os campos para acessar o site");
  } else {
    window.location.href = "fornecedores.html";
  }
}
// //FUNÇÃO PARA AMENIZAR NOMES EM ARRAY
var dadosLista = [];
var dadosCNPJ = [];

function salvarUser() {
  let nomeUser = document.getElementById("nomeUser").value;
  let nomeCNPJ = parseInt(document.getElementById("nomeCNPJ").value);
  if (nomeUser && nomeCNPJ) {
    dadosLista.push(nomeUser);
    dadosCNPJ.push(nomeCNPJ);
  }else{
    alert("Dados de campos obrigatórios");
  }
  criarLista();
  document.getElementById('nomeUser').value = '';
  document.getElementById('nomeCNPJ').value = '';

}
// //FUNÇÃO PARA AMENIZAR CNPJ EM ARRAY
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIO
function criarLista() {
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>CNPJ</th><th>Ações</th></tr>";
  for (let i = 0; i <= (dadosLista.length - 1); i++) {
    tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + dadosCNPJ[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    document.getElementById('tabela').innerHTML = tabela;
  }
}
// FUNÇÃO EDITAR NOME e CNPJ
function editar(i) {
  document.getElementById('nomeUser').value = dadosLista[(i - 1)];
  document.getElementById('nomeCNPJ').value = dadosCNPJ[(i - 1)];
  dadosLista.splice(dadosLista[(i - 1)], 1);
  dadosCNPJ.splice(dadosCNPJ[(i - 1)], 1);
}
// FUNÇÃO EXCLUIR NOME e CNPJ
function excluir(i) {
  dadosLista.splice((i - 1), 1);
  dadosCNPJ.splice((i - 1), 1);
  document.getElementById('tabela').deleteRow(i);
  document.getElementById('tabela').deleteRow(i);
}