var container = document.querySelector(".atividades");
var inputAtividade = document.querySelector("#inputAtiv");
var atividades = [];

function adicionarAtividade() {
  if (inputAtividade.value === "") {
    //TODO: Fazer uma mensagem de Alert
  } else {
    let atividade = document.createElement("div");
    atividade.classList.add("ativ");

    atividade.innerHTML = `
      <input type="checkbox" />
      <p>${inputAtividade.value}</p>`;

    let button = document.createElement("button");
    button.innerHTML = "Excluir";
    button.addEventListener("click", removerAtividade);
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
