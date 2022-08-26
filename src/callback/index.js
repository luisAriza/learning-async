function sum(num1, num2) {
  return num1 + num2;
}

function calc(n1, n2, callback) {
  return callback(n1, n2);
}

/*
	No es necesario poner los paréntesis a "sum" ya que
	de esa manera estaríamos ejecutando la funcion y lo que
	queremos es pasar la funcion 'cruda', por asi decirlo,
	para que luego sea ejecutada por el callback
	"callback(n1, n2)".
*/
console.log(calc(2, 2, sum));

setTimeout(function () {
  console.log("Hola JavaScript");
}, 3000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

/*
	En este caso se pasarían los argumentos de "greeting"
	al final de los parámetros del setTimeout.
*/
setTimeout(greeting, 2000, "Luis");
