function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
	var respuesta='si';

	do 
	{
		num =parseInt(prompt("Ingrese un numero"));
		acumulador = num+acumulador;
		contador++
		respuesta = prompt("Quiere continuar? Ingrese 'si'.Caso contrario ingrese cualqueir valor.");
	}while (respuesta =='si');


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


/* var seguir;
// do {
	alert("Hola");
	seguir = prompt("Quiere que lo salude de nuevo?")
}while (seguir=="s"); 
La diferencia entre el for, while y do while es que el for se usa si ya se de antemano la cantidad de 
repeticiones, el while puede NO EJECUTARSE NUNCA y el DO WHILE al menos se hara una vez.*/



