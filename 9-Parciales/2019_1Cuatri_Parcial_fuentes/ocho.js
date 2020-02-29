function mostrar()
{
    var numero;
    var letra;
    var contadorNumerosPares=0;
    var contadorNumerosImpares=0;
    var contadorCeros=0;
    var acumuladorPositivos=0;
    var contadorNumerosPositivos=0;
    var contadorNumerosNegativos=0;
    var promedioPositivos;
    var acumuladorNegativos=0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    var flag=0;
    var seguir;

    do
    {
        numero =parseInt(prompt("Ingrese un numero"));
        while (numero <-100 || numero>100 || isNaN(numero))
        {
            numero = parseInt(prompt("Dato invalido. Ingrese un numero"));

        }

        letra = prompt("Ingrese una letra");
        while (!((letra >= 'A' && letra <='Z') || (letra>='a' && letra <='z')))
        {
            letra = prompt("Dato invalido. Ingrese una letra");
        }

        if(numero%2==0)
        {
            contadorNumerosPares++;
        }else{
            contadorNumerosImpares++;
        }
        if(numero>0)
        {
            contadorNumerosPositivos++
            acumuladorPositivos=acumuladorPositivos+numero;
        }else if (numero<0)
        {
            contadorNumerosNegativos++;
            acumuladorNegativos = numero+acumuladorNegativos;
        }else{
            contadorCeros++;
        }

        if (numero >numeroMaximo|| flag==0)
        {
            numeroMaximo =numero;
            letraMaxima=letra;
        }
        if (numero < numeroMinimo|| flag==0)
        {
            numeroMinimo=numero;
            letraMinima=letra;
            flag=1;
        }
        
    
        seguir=prompt("Desea continuar?: ");
    
    }while (seguir == 's');

    promedioPositivos = acumuladorPositivos/contadorNumerosPositivos;

    document.write("La cantidad de numeros pares es: "+contadorNumerosPares+("</br>"));
    document.write("La cantidad de numeros impares es: "+contadorNumerosImpares+("</br>"));
    document.write("La cantidad de ceros es: "+contadorCeros+("</br>"));
    document.write("El promedio de todos los numeros positivos ingresados es: "+promedioPositivos+("</br>"));
    document.write("La suma de todos los numeros negativos es: "+acumuladorNegativos+("</br>"));
    document.write("El numero maximo ingresado es: "+numeroMaximo+" y la letra es: "+letraMaxima+("</br>"));
    document.write("El numero minimo ingresado es: "+numeroMinimo+" y la letra minima es: "+letraMinima+("</br>"));

    


}
