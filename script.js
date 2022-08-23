const palavrasValidas = [
  "arroz",
  "amora",
  "teste",
  "sagaz",
  "âmago",
  "negro",
  "êxito",
  "mexer",
  "termo",
  "nobre",
  "senso",
  "algoz",
  "afeto",
  "plena",
  "ética",
  "mútua",
  "tênue",
  "sutil",
  "vigor",
  "aquém",
  "fazer",
  "porém",
  "audaz",
  "assim",
  "sanar",
  "seção",
  "inato",
  "cerne",
  "fosse",
  "ideia",
  "poder",
  "moral",
  "desde",
  "torpe",
  "muito",
  "justo",
  "honra",
  "fútil",
  "sobre",
  "anexo",
  "quiçá",
  "razão",
  "etnia",
  "ícone",
  "sonho",
  "tange",
  "égide",
  "lapso",
  "amigo",
  "mútuo",
  "expor",
  "haver",
  "hábil",
  "tempo",
];

const palavraDoDia = "festa";
let linha = 1;
let entrada = [];
let tentativas = 6;

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

  if (tentativas == 0) {
    window.alert("Sem mais tentativas");
    entrada = console.log("Sem mais tentativas");
  }

  if (!alfabeto.includes(char)) {
    console.log("tecla inválida", char);
  } else if (char == "ENTER") {
    if (entrada.length < 5) {
      window.alert("Sem letras suficientes");
      i;
    } else {
      validarEntrada();
      linha++;
      entrada = [];
    }
  } else if (char == "BACKSPACE") {
    apagaLetra();
    console.log(entrada);
  } else if (entrada.length == 5) {
    console.log("Só aceita até 5 letras");
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
  if (entrada.length > 0) {
    entrada.pop();
    let elId = `c${entrada.length + 1}l${linha}`;
    const el = document.getElementById(elId);
    el.textContent = "";
  } else {
    console.log("não há nada para apagar");
  }
}

// function coloreTeclado() {
//   let botaoTeclado = document.getElementsByClassName('letra');
// }

function validarEntrada() {
  console.log(
    "validar se " + entrada.join("") + " é igual " + palavraDoDia.toUpperCase()
  );
  // se a entrada for extamaente a palavra do dia:
  if (entrada.join("") == palavraDoDia.toUpperCase()) {
    modal.style.display = "block"; // mostra o modal quando acerta
    for (let letra = 0; letra < entrada.length; letra++) {
      let botaoTeclado = document.getElementById(entrada[letra]);
      let elId = `c${letra + 1}l${linha}`;
      const el = document.getElementById(elId);
      el.classList.add("validado", "rotate-horizontal-center");
      tentativas = 0;
      botaoTeclado.classList.remove("normal");
      botaoTeclado.classList.add("validado");
    }
  } else {
    for (let letra = 0; letra < entrada.length; letra++) {
      let elId = `c${letra + 1}l${linha}`;
      const el = document.getElementById(elId);
      let palavraDoDia1 = palavraDoDia.toUpperCase();
      let botaoTeclado = document.getElementById(entrada[letra]);
      // se a letra for igual:
      if (entrada[letra] == palavraDoDia[letra].toUpperCase()) {
        el.classList.add("validado", "rotate-horizontal-center");
        botaoTeclado.classList.remove("normal");
        botaoTeclado.classList.add("validado");
      } else if (palavraDoDia1.includes(entrada[letra])) {
        // se a letra existe na palavra mas está no lugar errado:
        let tentativaLetraPosicao = entrada[letra];
        let posicaoRealLetra = palavraDoDia.lastIndexOf(palavraDoDia[letra]);
        if (tentativaLetraPosicao != posicaoRealLetra) {
          el.classList.add("posicao-errada", "rotate-horizontal-center");
          botaoTeclado.classList.remove("normal");
          botaoTeclado.classList.add("posicao-errada");
        }
        // se a letra for invalida:
      } else {
        el.classList.add("invalido", "rotate-horizontal-center");
        botaoTeclado.classList.remove("normal");
        botaoTeclado.classList.add("invalido");
      }
    }
    tentativas--;
  }
}

document.body.addEventListener("keydown", ouvinteDeTeclas);

// tentativa de fazer o teclado funcionar com click
document.querySelectorAll(".letra").forEach((el) => {
  el.addEventListener("click", function (el) {
    let letra = el.target.textContent;
    document.getElementsByClassName(letra);
    el.textContent = letra;
    if (letra == "⌫") {
      letra = "BACKSPACE";
    }
    exibeLetra(letra);
  });
});

// Get the modal
var modal = document.getElementById("modalAcerto");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
