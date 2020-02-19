function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
//Creo un contador para que el dato solo se pida una vez
//No tener el contador provoca que pueda validar un numero fuera del rango si le precede un valor aceptado.

/*	var x = 0

	while (numero >=0 && numero <=9 && x==0)
	{
		alert("El numero seleccionado es valido")
		x++
	}

*/

while (numero < 0 || numero >10 || isNaN(numero))
{
	numero = (prompt("Error, el dato ingresado no es valido. Ingrese un nuevo numero."));
}
document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN