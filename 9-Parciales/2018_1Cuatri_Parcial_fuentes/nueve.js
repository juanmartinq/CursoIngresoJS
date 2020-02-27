function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorTempPar=0;
    var masPesado=0;
    var marcaPesado;
    var productosBajoCero=0;
    var acumuladorPeso=0;
    var promedioPeso;
    var contadorProductos=0;
    var pesoMaximo;
    var pesoMinimo;
    flag =0;


    do
    {
        marca = prompt("Ingrese la marca del producto");

        peso = parseInt(prompt("Ingrese el peso del producto"));
        while (peso <1 || peso>100)
        {
            peso = parseInt(prompt("Dato invalido. Ingrese el peso del producto"));   
        }

        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento"));
        while (temperatura <-30 || temperatura>30)
        {
            temperatura = parseInt(prompt("Dato invalido. Ingrese la temperatura de almacenamiento."));   
        }
        acumuladorPeso=acumuladorPeso+peso;

        if (temperatura %2==0)
        {
            contadorTempPar++;
        }
        if (temperatura <0)
        {
            productosBajoCero++;
        }
        if (peso>pesoMaximo ||flag ==0)
        {
            pesoMaximo=peso;
            marcaPesado=marca
        }
        if (peso<pesoMinimo || flag==0)
        {
            pesoMinimo=peso;
            flag=1;
        }

        contadorProductos++;
        seguir = prompt("Desea seguir? :");
    }while (seguir== "s");

    promedioPeso = acumuladorPeso/contadorProductos;

    document.write("La cantidad de temperaturas pares es: "+contadorTempPar+("</br>"));
    document.write("La marca del producto mas pesado es: "+marcaPesado+("</br>"));
    document.write("La cantidad de productos que se conservan a temperaturas bajo cero es: "+productosBajoCero+("</br>"));
    document.write("El promedio de peso de todos los productos es: "+promedioPeso+("</br>"));
    document.write("El peso maximo es: "+pesoMaximo+" y el peso minimo es: "+pesoMinimo+("</br>"));

}
