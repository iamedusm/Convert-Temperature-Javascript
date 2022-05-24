//Chama o prompt
const prompt = require('prompt-sync')({ sigint: true })

//Limpa a tela
clearScreen()

//Variaveis Iniciais
let celsius = 0, fahrenheit = 0, num = 0

//Informações Iniciais
console.log('Conversor de temperatura\n')
console.log('Digite 1 para converter Celsius em Fahrenheit')
console.log('Digite 2 para converter Fahrenheit em Celsius\n')
num = prompt('Agora digite um numero: ')

//Verifica se o numero é valido para continuar
while(num > 2 || num < 1) {
    clearScreen()
    console.log('Você digitou um numero invalido digite novamente')
    num = prompt('Digite 1 para calcular celsius 2 para calcular fahrenheit: ')
    console.log('\n')
}

//Verifica se o numero digitado é celsius ou fahrenheit
if (num == 1) {
    celsius = prompt('Digite a Temperatura em celsius: ')
    CelsiusToFahrenheit(celsius)
} else if (num == 2) {
    fahrenheit = prompt('Digite a Temperatura em fahrenheit: ')
    FahrenheitToCelsius(fahrenheit)
}

//Calcula Celsius para Fahrenheit
function CelsiusToFahrenheit(celsius){
    let calcCelsius = celsius * 9 / 5 + 32
    console.log(`A temperatura é de ${calcCelsius}° graus Fahrenheit\n`)
}

//Calcula Fahrenheit para Celsius
function FahrenheitToCelsius(fahrenheit) {
    let calcFahrenheit = (fahrenheit - 32) * 5 / 9
    console.log(`A temperatura é de ${calcFahrenheit.toFixed(2)}° graus Celsius\n`)
}

//Função para apagar a tela
function clearScreen() {
    process.stdout.write('\033c')
}