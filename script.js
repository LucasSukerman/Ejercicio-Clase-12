var numero1 = "";
var numero2 = "";
var operador = "";
var primerNumeroIntroducido = false;
var resultado = 0;

function numeroIntroducido(valor){
    if (!primerNumeroIntroducido) {
        numero1 += valor;
        document.getElementById("display").innerHTML = numero1;
    }else {
        numero2 += valor;
        document.getElementById("display").innerHTML = numero2;
    }
    /*
    console.log(numero1);
    console.log(numero2);
    */
}

function operadorIntroducido(op) {
    operador = op;
    primerNumeroIntroducido = true;
    /*console.log(operador);*/
}

function realizarCalculo() {
    if (operador == "suma") {
        resultado = parseInt(numero1) + parseInt(numero2);
        document.getElementById("display").innerHTML = resultado;
        numero1 = resultado;
        numero2 = "";
    }else if (operador == "resta") {
        resultado = parseInt(numero1) - parseInt(numero2);
        document.getElementById("display").innerHTML = resultado;
        numero1 = resultado;
        numero2 = "";
    }else if (operador == "multi") {
        resultado = parseInt(numero1) * parseInt(numero2);
        document.getElementById("display").innerHTML = resultado;
        numero1 = resultado;
        numero2 = "";
    }else if (operador == "divi") {
        resultado = parseInt(numero1) / parseInt(numero2);
        document.getElementById("display").innerHTML = resultado;
        numero1 = resultado;
        numero2 = "";
    }
}

document.getElementById("boton_clear").addEventListener("click", function(){
    numero1 = "";
    numero2 = "";
    operador = "";
    primerNumeroIntroducido = false;
    resultado = 0;
    document.getElementById("display").innerHTML = resultado;
    /*
    console.log(numero1);
    console.log(numero2);
    console.log(operador);
    console.log(primerNumeroIntroducido);
    console.log(resultado);
    */
})