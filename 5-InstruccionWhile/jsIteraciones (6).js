function mostrar()
{

	var contador=0;
	var acumulador=0;
	





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

while (contador <= 4)
{
	acumulador = prompt("Introduzca un numero");
	acumulador=parseInt(acumulador);
	acumulador = acumulador+acumulador;
	contador++
}

alert (acumulador);


}//FIN DE LA FUNCIÓN