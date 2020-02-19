function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
	

while (contador < 5)
{
	num = parseInt(prompt("Ingrese un numero"));
	while (isNaN(num))
	{
		num=parseInt(prompt("Eso no es un numero. Por favor ingrese un numero."));
	}
	acumulador =num+acumulador
	contador++
}

//No la necesito declarar esta variable
//var promedio = acumulador/5;

document.getElementById("suma").value = acumulador
document.getElementById("promedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN