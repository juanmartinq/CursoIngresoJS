function mostrar()
{

//document.write("Hola mundo. </br>") Funcion que transforma el html en documento. El br indica Break Line, salto de linea.
	var num;
	var contadorPositivos=0;
	var sumaPositivos=0;
	var contadorNegativos=0;
	var sumaNegativos=0;
	var ceros=0;
	var pares=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var diferenciaTotal;
	var respuesta="si";

	do 
	{
		num=parseInt(prompt("Ingrese un numero: "));
		while (isNaN(num))
		{
			num =prompt("Error. Por favor ingrese un dato valido: ");
		}
		if (num >0 )
		{
			sumaPositivos = num+sumaPositivos;
			contadorPositivos++;

		}
		else if (num <0)
		{
			sumaNegativos = num+sumaNegativos;
			contadorNegativos++;
		}
		else 
		{
			ceros++
		}

		if (num % 2==0)
		{
			pares++;
		}

		respuesta = prompt("Desea continuar? Escriba 'si'.");

	 }while (respuesta == 'si');
	
if (contadorNegativos != 0)
{
	promedioNegativo = sumaNegativos/contadorNegativos;
}

if (contadorPositivos!= 0)
{
	promedioPositivo = sumaPositivos/contadorPositivos;
}
	 
	 diferenciaTotal = contadorPositivos-contadorNegativos;

	 document.write("La suma de los numeros negativos es : "+sumaNegativos+ "</br>");
	 document.write("La suma de los numeros positivos es : " +sumaPositivos+ "</br>");
	 document.write("La cantidad de numeros positivos ingresados es: "+contadorPositivos + "</br>");
	 document.write("La cantidad de numeros negativos ingresados es: "+contadorNegativos + "</br>");
	 document.write("La cantidad de ceros ingresados es: "+ceros+"</br>");
	 document.write("La cantidad de numeros pares es: "+pares +"</br>");
	 document.write("El promedio de los numeros positivos es: "+promedioPositivo+"</br>");
	 document.write("El promedio de los numeros negativos es: "+ promedioNegativo+ "</br>");
	 document.write("La diferencia total entre numeros positivos y negativos ingresados es: "+diferenciaTotal+"</br>");

}//FIN DE LA FUNCIÓN