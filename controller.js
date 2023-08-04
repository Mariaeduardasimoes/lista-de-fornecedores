function acessar() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginSenha = document.getElementById("loginSenha").value;

  if(!loginEmail || !loginSenha) {
      alert("favor preencha os campos para acessar o site");
  } else {
     window.location.href = "aula2.html";
  }
}
// //FUNÇÃO PARA AMENIZAR NOMES EM ARRAY
var dadosLista = [];

function salvarUser(){
  let nomeUser = document.getElementById("nomeUser").value;


  if(nomeUser){
      dadosLista.push (nomeUser);
      criarLista();
      document.getElementById('nomeUser').value = '';
}
}
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIO
function criarLista(){
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

  for(let i = 0;i <=(dadosLista.length - 1);i++){
      tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      document.getElementById('tabela').innerHTML = tabela;
  }
}
// FUNÇÃO EDITAR NOME 
function editar(i){
  document.getElementById('nomeUser').value = dadosLista[(i - 1)];
  dadosLista.splice(dadosLista[(i-1)], 1);
}
// FUNÇÃO EXCLUIR NOME 
function excluir(i){
  dadosLista.splice((i-1),1);
  document.getElementById('tabela').deleteRow(i);
}