function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
//Creo un contador para que el dato solo se pida una vez
//No tener el contador provoca que pueda validar un numero fuera del rango si le precede un valor aceptado.

	var x = 0

	while (numero >=0 && numero <=10 && x==0)
	{
		alert("El numero seleccionado es valido")
		x++
	}


}//FIN DE LA FUNCIÓN