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
    if (entrada.length < 5) {
      window.alert("Sem letras suficientes");
      i;
    } else {
      validarEntrada();
      linha += 1;
      entrada = [];
    }
  } else if (char == "BACKSPACE") {
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
  entrada.pop();
  let elId = `c${entrada.length + 1}l${linha}`;
  const el = document.getElementById(elId);
  el.textContent = "";
}

function validarEntrada() {
  console.log(
    "validar se " + entrada.join("") + " é igual " + palavraDoDia.toUpperCase()
  );
  if (entrada.join("") == palavraDoDia.toUpperCase()) {
    for (let letra = 0; letra < entrada.length; letra++) {
      let elId = `c${letra + 1}l${linha}`;
      const el = document.getElementById(elId);
      el.classList.add("validado");
    }
    window.alert("Acertou!");
  } else {
    for (let letra = 0; letra < entrada.length; letra++) {
      if (entrada[letra] == palavraDoDia[letra].toUpperCase()) {
        let elId = `c${letra + 1}l${linha}`;
        const el = document.getElementById(elId);
        el.classList.add("validado");
      } else if (palavraDoDia.includes(letra)) {
        // se a letra existe na palavra mas está no lugar errado
        console.log("oi amarelo");
        let elId = `c${letra + 1}l${linha}`;
        const el = document.getElementById(elId);
        el.classList.add("posicao-errada");
      } else {
        let elId = `c${letra + 1}l${linha}`;
        const el = document.getElementById(elId);
        el.classList.add("invalido");
      }
    }
  }
}

document.body.addEventListener("keydown", ouvinteDeTeclas);
