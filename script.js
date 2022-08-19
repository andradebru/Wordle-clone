const palavrasValidas = ["arroz", "amora", "teste"];

const palavraDoDia = "arroz";

let linha = 1;

let entrada = [];

let elId = `c${entrada.length}l${linha}`;
const el = document.getElementById(elId);

const ouvinteDeTeclas = (event) => {
  let char = event.key.toUpperCase();
  let alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "ENTER",
    "BACKSPACE",
  ];

  if (!alfabeto.includes(char)) {
    console.log("tecla inválida", char);
  } else if (char == "ENTER") {
    validarEntrada();
    linha += 1;
  } else if (char == "BACKSPACE") {
    entrada.pop();
    apagaLetra();
    console.log(entrada);
  } else if (entrada.length == 5) {
    console.log("Só aceita até 5 letras");
    validarEntrada();
  } else {
    entrada.push(char);
    console.log(entrada);
    exibeLetra(char);
  }
};

function exibeLetra(letra) {
  let elId = `c${entrada.length}l${linha}`;
  const el = document.getElementById(elId);
  el.textContent = letra;
}

function apagaLetra() {
  let elId = `c${entrada.length + 1}l${linha}`;
  const el = document.getElementById(elId);
  el.textContent = "";
}

function validarEntrada() {
  console.log(
    "validar se " + entrada.join("") + " é igual " + palavraDoDia.toUpperCase()
  );
  if (entrada.join("") == palavraDoDia.toUpperCase()) {
    window.alert("Acertou!");
  }

  if (entrada.length == 5) {
    console.log("entrei");
    for (let letra = 0; letra < entrada.length; letra++) {
      // const element = array[letra];
      if (entrada[letra] == palavraDoDia[letra].toUpperCase()) {
        console.log("oi");
        let elId = `c${letra + 1}l${linha}`;
        const el = document.getElementById(elId);
        el.classList.add("validado");
      } else {
        console.log("nao");
      }
    }

    if (entrada.length < 5) {
      window.alert("Sem letras suficientes");
    } else {
    }
  }
}

document.body.addEventListener("keydown", ouvinteDeTeclas);
