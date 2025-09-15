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

// Função para sortear um amigo
function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("Adicione pelo menos dois amigos para realizar o sorteio.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];

  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = ""; // limpa resultado anterior

  const li = document.createElement("li");
  li.textContent = `O amigo secreto é: ${amigoSorteado}`;
  ulResultado.appendChild(li);
}
// Função para reiniciar o sorteio
function reiniciarSorteio() {
  listaDeAmigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}