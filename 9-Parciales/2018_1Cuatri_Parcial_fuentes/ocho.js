function mostrar()
{
    var letra;
    var numero;
    var contadorPares=0;
    var contadorImpares =0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var promedioPositivos;
    var contadorNegativos=0;
    var sumaNegativos=0;
    var Maximo=0;
    var Minimo=0;
    var flag;
    var seguir;
    var letraMayor;
    var letraMenor;

    do 
    {
        letra = prompt("Ingrese una letra");
        while (!((letra>= "A"&& letra<="Z" || letra>= "a"&& letra<="z")))
        {
            letra = prompt("Caracter invalido. Ingrese una letra");
        }
        
        numero =parseInt(prompt("Ingrese un numero"));
        while (numero <-100 || numero>100 || isNaN(numero))
        {
            numero =parseInt(prompt("Dato invalido. Ingrese un numero"));
        }
        
        if (numero %2==0)
        {
            contadorPares++
        }else
        {
            contadorImpares++
        }
        
        if (numero > 0)
        {
            acumuladorPositivos = acumuladorPositivos+numero;
            contadorPositivos++;
        }else if(numero<0)
        {
            sumaNegativos=sumaNegativos+numero;
            contadorNegativos++;
        }else 
        {
            contadorCeros++;
        }

        if (numero>Maximo || flag==0)
        {
            Maximo=numero;
            letraMayor=letra;
        }
        if (numero<Minimo || flag==0)
        {
            Minimo=numero;
            letraMenor=letra;
            flag=1;
        }

        seguir = prompt("Desea seguir? :");
    }while (seguir == "s");
    
    
promedioPositivos =acumuladorPositivos/contadorPositivos;

document.write("La cantidad de numeros pares es: "+contadorPares+("</br>"));
document.write("La cantidad de numeros impares es: "+contadorImpares+("</br>"));
document.write("La cantidad de ceros es: "+contadorCeros+("</br>"));
document.write("El promedio de los numeros positivos es: "+promedioPositivos+("</br>"));
document.write("La suma de todos los numeros negativos es : " +sumaNegativos+("</br>"));
document.write("La letra y numero maximo es: "+letraMayor+Maximo+("</br>"));
document.write("La letra y numero minimo es: "+letraMenor+Minimo+("</br>"));



}
