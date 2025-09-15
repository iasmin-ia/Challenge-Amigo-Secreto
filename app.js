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
// Função para atualizar a lista na tela
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // limpa a lista

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}
