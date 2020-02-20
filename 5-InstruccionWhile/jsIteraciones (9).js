function mostrar() {


	// declarar variables
	var maximo;
	var minimo;
	var num;
	var respuesta = 'si';
	flag = 0;

	do {
		num = parseInt(prompt("Ingrese un nùmero"));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es valido. Por favor ingrese un nùmero"));
		}

        /*if (num >maximo)
		{
			maximo = num;
		}//Hacer esto con la variable inicializada implica que el primer valor ingresado no sera menor que cero (si fuera positivo) la condicion no se cumple.
		else if (num<minimo)
		minimo=num;
		*/

		if (flag == 0 || num > maximo) {
			maximo = num;
		}

		if (flag == 0 || num < minimo) {
			minimo = num;
			flag = 1;
		}
		respuesta = prompt("Desea continuar? Ingrese 'si'.");

	} while (respuesta == 'si');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN