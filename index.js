console.log("Hello World!!!");

document.getElementById("divTeste").innerText = "Esse é meu primeiro projeto em JS (JavaScript).";

var numero1 = 2;
var numero2 = 3;

console.log(numero1 + numero2);

numero1 = "2";
console.log(numero1 + numero2);

function somar() {
    document.getElementById("divTeste").innerText = parseInt(document.getElementById("txtNumero1").value) + parseInt(document.getElementById("txtNumero2").value);
}