function calcular() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value


    alert(Number(number1) + Number(number2))

}


function Subtrair() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value


    alert(Number(number1) - Number(number2))

}

function Multiplicar() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value


    alert(Number(number1) * Number(number2))

}

function Dividir() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value
    if (number1 == 0 || number2 == 0) {
        alert("Não pode ser zero")
    }
    else { alert(Number(number1) / Number(number2)) }



}
