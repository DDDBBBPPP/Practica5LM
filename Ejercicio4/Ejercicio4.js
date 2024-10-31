
function calcular() {
    let x = document.getElementById("op1").value;
    let y = document.getElementById("op2").value;
    let opcion = document.getElementById("operacion").value;
    let resultado
    switch (opcion) {

        case "+":
            resultado = x + y;
            break;
        case "-":
            resultado = x - y;
            break;

        case "*":
            resultado = x * y;
            break;

        case "/":
            resultado = x / y;
            break;

    }
    document.getElementById("res").value = resultado;

}
