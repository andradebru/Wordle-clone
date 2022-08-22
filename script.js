const palavrasValidas = ["arroz", "amora", "teste"];

const palavraDoDia = "FESTA";

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
    //window.alert("Acertou!");
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };
  } else {
    for (let letra = 0; letra < entrada.length; letra++) {
      let elId = `c${letra + 1}l${linha}`;
      const el = document.getElementById(elId);
      let palavraDoDia1 = palavraDoDia.toUpperCase();
      if (entrada[letra] == palavraDoDia[letra].toUpperCase()) {
        el.classList.add("validado");
      } else if (palavraDoDia1.includes(entrada[letra])) {
        // se a letra existe na palavra mas está no lugar errado
        let tentativaLetraPosicao = entrada[letra];
        let posicaoRealLetra = palavraDoDia.lastIndexOf(palavraDoDia[letra]);
        if (tentativaLetraPosicao != posicaoRealLetra) {
          el.classList.add("posicao-errada");
        }
      } else {
        el.classList.add("invalido");
      }
    }
  }
}

document.body.addEventListener("keydown", ouvinteDeTeclas);

// tentativa de fazer o teclado funcionar com click
document.querySelectorAll(".letra").forEach((el) => {
  el.addEventListener("click", function (el) {
    let letra = el.srcElement.textContent;
    if (letra == "") {
      letra = "BACKSPACE";
    }
    trataTecla(letra);
  });
});

// Get the modal
var modal = document.getElementById("modalAcerto");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

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
