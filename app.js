// Array para armazenar os nomes
let listaDeAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  listaDeAmigos.push(nome);
  input.value = ""; // limpa o campo
  atualizarLista();
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
