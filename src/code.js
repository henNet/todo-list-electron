var container = document.querySelector(".atividades");
var inputAtividade = document.querySelector("#inputAtiv");
var atividades = [];

function adicionarAtividade(event) {
  if (event && event.keyCode !== 13) return;

  if (inputAtividade.value === "") {
    //TODO: Fazer uma mensagem de Alert
  } else {
    let atividade = document.createElement("div");
    atividade.classList.add("ativ");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", mudarStatusAtividade);

    let p = document.createElement("p");
    p.innerHTML = inputAtividade.value;

    let button = document.createElement("button");
    button.innerHTML = "Excluir";
    button.addEventListener("click", removerAtividade);

    atividade.appendChild(checkbox);
    atividade.appendChild(p);
    atividade.appendChild(button);

    atividades.push(atividade);

    container.innerHTML = "";
    atividades.forEach((item) => container.appendChild(item));

    inputAtividade.value = "";
  }
}

function removerAtividade(event) {
  let index = -1;
  for (i = 0; i < atividades.length; i++) {
    if (atividades[i] == event.target.parentElement) index = i;
  }

  if (index > -1) {
    atividades.splice(index, 1);
  }

  container.innerHTML = "";
  atividades.forEach((item) => container.appendChild(item));
}

function atualizarStatusAtividade(ativ) {
  let index = -1;
  for (i = 0; i < atividades.length; i++) {
    if (atividades[i] == ativ) index = i;
  }

  if (index > -1) {
    atividades.splice(index, 1);
  }

  atividades.push(ativ);
  container.innerHTML = "";
  atividades.forEach((item) => container.appendChild(item));
}

function mudarStatusAtividade(event) {
  let elemPai = event.target.parentElement;
  if (event.target.checked) {
    elemPai.style.opacity = "50%";
    elemPai.children[1].style.textDecoration = "line-through";
    atualizarStatusAtividade(elemPai);
  } else {
    elemPai.style.opacity = "100%";
    elemPai.children[1].style.textDecoration = "none";
  }
}
