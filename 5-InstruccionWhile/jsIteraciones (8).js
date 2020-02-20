function mostrar()
{

	var contador=0;
	var positivo=0;
	//Este acumulador de negativos vale -1 ya que me pide multiplicar.
	//Si inicializa en CERO, toda multiplicacion por CERO da CERO.
	var negativo=1;
	var num;
	
	var respuesta='si';

	do {
		num = parseInt(prompt("Ingrese un nùmero."));
		while (isNaN(num))
		{
			numero = parseInt(prompt("Eso no es un nùmero. Ingrese un nùmero."));
		}
		if (num >= 0)
		{
			positivo=positivo+num;
		}
		else
		{
			negativo = negativo*num;
			contador++
		}
		respuesta = prompt("Quiere continuar? Escriba 'si'. Caso contrario ingrese cualquier valor.");


	}while (respuesta =='si');

	if(contador ==0)
	{
		negativo=0;
	}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN