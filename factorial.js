alert("Hola");

const factorial = (fact) => {
    // if(fact.trim() === "" || isNaN(fact) || fact === null) {
    //     alert("Ingrese un valor correcto");
    //     location.reload();
    // }
    if (fact < 0) {
        return "No se pudo calcular factorial, el valor proporcionado es: " + fact;
    } 
    if (fact == 0) {
        return 1;
    }

    const resultado = 1;
    for(i = 1; i <= fact; i++) {
        resultado = resultado + i;
    }

    return resultado;
}

const mostrarFactorial = () => {
    const valor = prompt("Valor para obtener el factorial: ");
    const numero = parseInt(valor);
    const valFac = factorial(numero);
    const h1 = document.getElementsByTagName("h1");
    console.log(valFac);
}

window.onload = () => {
    mostrarFactorial();
}