function mostrar()
{
    var num1 = parseInt(prompt("Ingrese un numero"));
    var num2 = parseInt(prompt("Ingrese un numero"));
    var resta;
    var suma;
    if (num1 === num2)
    {
        alert (num1+("")+num2);
    }else if (num1>num2)
    {
        resta = num1-num2;
        alert ("El primer numero menos el segundo es: "+resta)
    }else {
        suma=num1+num2;
        alert ("El primer numero mas el segundo numero es: "+suma);
    }
    if (suma >10)
    {
        alert ("La suma es " +suma +" y supero el 10");
    }

}
