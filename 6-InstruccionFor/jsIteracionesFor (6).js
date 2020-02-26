function mostrar()
{
    var pares = 0;
    var numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)|| numero<1)
    {
        numero = parseInt(prompt("Dato invalido. Por favor ingrese un numero"));
    }
    for (var i=1; i<=numero ; i++)
    {
        if (i % 2 == 0)
        {
            console.log(i);
            pares++;
            
        }
    }
    console.log("La cantidad de numeros pares es "+pares);
    


}//FIN DE LA FUNCIÓN