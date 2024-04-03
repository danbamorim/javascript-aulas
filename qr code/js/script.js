// selecao de elementos, voce cria as selecoes dos elementos para funcionar via js

const container = document.querySelector(".container") // css

const qrCodeBtn = document.querySelector("#qr-form button") //botao de apertar e gerar o qr code

const qrCodeInput = container.querySelector("#qr-form input") // pra pegar o valor do input(nome,link etc) que vai gerar o qrcode personalizada

const qrCodeImg = container.querySelector("#qr-code img") //  pra pegar o campo da imagem

// funcao de gerar o qr code 

function generateQrCode() {
  let qrCodeInputValue = qrCodeInput.value; // variavel qrCodeInputValue  é igual qrCodeInput.value que é o valor do campo input

  if (!qrCodeInputValue) return; // se nao tiver o valor , ele apenas returna

  qrCodeBtn.innerText = "Gerando código..."; // Aqui o botao muda de nome com a funcao innerText, ele ira escrever o que está em aspas duplas

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; // aqui é api de imagens do qrcode. Tem um site que é gerador de qrcode(cria qr code links, nomes etc) e nele tem a funcao ${qrCodeInputValue} para criar a imagem a partir do que o usuario escreveu no campo e enviou 

  qrCodeImg.addEventListener("load", () => { // load é um evento do javascript de carregamento, onde voce pode manipular da sua forma
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!"; // Inner text ira mudar o nome do botao para Codigo criado apos de criar o codigo
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
}); // criando a funcao de clicar( "click" evento criado do javascript) da function generateQrCode

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  } // criando a funcionalidade enter(usando o evento keydown do javascript ), quando o usuario desejar criar o enter. Assim irá funcionar
});

// Limpar área do código
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  } // Aqui o evento keyup faz remover o qr code apos limpar o campo(input)
});