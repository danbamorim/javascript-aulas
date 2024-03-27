// SELECAO DE ELEMENTOS : criando variaveis para selecioanar 

const multiplicationForm = document.querySelector("#multiplicacao-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicacao")
const multiplicationTable = document.querySelector("#multiplicacao-operations")



// FUNCOES

const createTable = (number, multiplicatiorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatiorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div> <div class="result">${result}</div>
      </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template,"text/html")
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
};








// EVENTOS : ação quando clica

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // é usado em JavaScript para interromper o comportamento padrão de um evento, como seguir um link ou enviar um formulário. Isso permite que o desenvolvedor execute código personalizado em resposta ao evento sem que a ação padrão ocorra. É frequentemente utilizado em situações onde se deseja manipular o comportamento de eventos de forma personalizada, como validação de formulários ou interações de interface.

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})