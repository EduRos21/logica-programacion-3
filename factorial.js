alert("Hola");

const factorial = (fact) => {
  if (fact < 0) {
    return "No se pudo calcular factorial, el valor proporcionado es: " + fact;
  }
  if (fact == 0) {
    return 1;
  }

  let resultado = 1;
  for (let i = 1; i <= fact; i++) {
    resultado = resultado * i;
  }

  return resultado;
};

const mostrarFactorial = () => {
  event.preventDefault();
  const valor = prompt("Valor para obtener el factorial: ");
  if (valor === null || valor.trim() === "" || isNaN(valor)) {
    alert("Valor ingresado no válido, por favor ingresa un número entero.");
    location.reload();
  }
  const numero = parseInt(valor);
  const valFac = factorial(numero);
  const elementoh1 = document.getElementById("factorial");
  console.log(valFac);
  elementoh1.textContent = `El factorial del número "${numero}" es: ${valFac}`;
};

window.onload = () => {
  mostrarFactorial();
};
