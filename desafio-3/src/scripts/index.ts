/* 
  O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

  let botaoAtualizar = document.getElementById('atualizar-saldo');
  let botaoLimpar = document.getElementById('limpar-saldo');
  let soma = document.getElementById('soma');
  let campoSaldo = document.getElementById('campo-saldo');

  campoSaldo.innerHTML = 0

  function somarAoSaldo(soma) {
      campoSaldo.innerHTML += soma;
  }

  function limparSaldo() {
      campoSaldo.innerHTML = '';
  }

  botaoAtualizar.addEventListener('click', function () {
      somarAoSaldo(soma.value);
  });

  botaoLimpar.addEventListener('click', function () {
      limparSaldo();
  });
*/

let botaoAtualizar = document.querySelector("#atualizar-saldo") as HTMLButtonElement;
let botaoLimpar = document.querySelector("#limpar-saldo") as HTMLButtonElement;
let soma = document.querySelector("#soma") as HTMLInputElement;
let campoSaldo = document.querySelector("#campo-saldo") as HTMLElement;
let form = document.querySelector("#form") as HTMLFormElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number): void {
  campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
}

function limparSaldo(): void {
  campoSaldo.innerHTML = "0";
}

function handleSubmit(event: Event): void {
  event.preventDefault();
  soma.value = "";
  soma.focus();
}

form.addEventListener("submit", (event) => {
  handleSubmit(event);
});

botaoAtualizar?.addEventListener("click", () => {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener("click", () => {
  limparSaldo();
});
