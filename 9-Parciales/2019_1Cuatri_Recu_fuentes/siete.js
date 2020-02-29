function mostrar()
{
    var kilos;
    var acumuladorKilos=0;
    var contadorBolsas=0;
    var promedioKilos;
    var bolsaLiviana;
    var saborBolsa;
    var contadorBolsasCarne=0;
    var acumuladorKilosCarne=0;
    var promediosKilosCarne;
    var sabor;
    var i=0;
    flag=0;

    for (i; i<10;i++)
    {
        kilos = parseInt(prompt("Ingrese el peso de la bolsa: "));
        while (kilos <0 || kilos>500 || isNaN(kilos))
        {
            kilos = parseInt(prompt("Dato invalido. Ingrese el peso de la bolsa: "));

        }

        acumuladorKilos=acumuladorKilos+kilos;
        

        sabor =prompt("Ingrese el sabor de la bolsa: ")
        while (!(sabor == 'carne' || sabor =='pollo' || sabor=='vegetales'))
        { 
            sabor =prompt("Ese sabor no existe. Ingrese el sabor de la bolsa: ");

        }

        contadorBolsas++;

        if(kilos <bolsaLiviana || flag==0)
        {
            bolsaLiviana=kilos;
            saborBolsa=sabor;
            flag=1;
        }

        if(sabor== 'carne')
        {
            acumuladorKilosCarne=acumuladorKilosCarne+kilos;
            contadorBolsasCarne++;

        }


    }

    promedioKilos=acumuladorKilos/contadorBolsas;
    promediosKilosCarne = acumuladorKilosCarne/contadorBolsasCarne;

    alert("El promedio de kilos totales es: "+promedioKilos
    +"\n La bolsa mas liviana pesa: "+bolsaLiviana+" y es de sabor "+saborBolsa+
    "\n La cantidad de bolsas sabor carne es: "+contadorBolsasCarne+" y el promedio de kilos de sabor carne es: "+promediosKilosCarne); 
}
