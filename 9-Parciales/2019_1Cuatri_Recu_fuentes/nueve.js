function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var notaFinal;
    var seguir;
    var varonesAprobados=0;
    var menores=0;
    var acumuladorNotaMenoresAprobados=0;
    var promedioNotasMenoresAprobados;
    var acumuladorAdolescentes=0;
    var notaAdolescentes=0;
    var promedioAdolescentes;
    var acumuladorNMayores=0;
    var contadorMayores=0;
    var promedioMayores;
    var promedioMasculino;
    var contadorVarones=0;
    var acumuladorNVarones=0;
    var promedioFemenino;
    var contadorFemenino=0;
    var acumuladorNFemenino=0;

    do 
    {
        nombre = prompt("Ingrese el nombre del alumno: ");

        edad=parseInt(prompt("Ingrese la edad del alumno"));
        while (edad < 1 || edad>99 || isNaN(edad))
        {
            edad = parseInt(prompt("Dato invalido. Ingrese la edad del alumno"));
        }

        sexo = prompt("Ingrese el sexo: ").toLowerCase();
        while (!(sexo == 'f'|| sexo=='m'))
        {
            sexo = prompt("Dato invaido. Ingrese el sexo: ").toLowerCase();
        } 

        notaFinal=parseInt(prompt("Ingrese la nota del examen final: "));
        while(notaFinal<1 || notaFinal > 10 || isNaN(notaFinal))
        {
            notaFinal=parseInt(prompt("Dato invalido. Ingrese la nota del examen final: "));
        }

        if(notaFinal>7 && sexo=='m')
        {
            varonesAprobados++;
        }

        if (edad<13)
        {
            menores++;
            acumuladorNotaMenoresAprobados=acumuladorNotaMenoresAprobados+notaFinal;
        }

        if (edad >=13 && edad <18)
        {
            acumuladorAdolescentes++;
            notaAdolescentes=notaFinal+notaAdolescentes
        }

        if (edad>18)
        {
            contadorMayores++;
            acumuladorNMayores=acumuladorNMayores + notaFinal;

        }

        if (sexo =='m')
        {
            contadorVarones++;
            acumuladorNVarones = acumuladorNVarones+notaFinal;
        }else
        {
            contadorFemenino++;
            acumuladorNFemenino=acumuladorNFemenino+notaFinal;

        }

        seguir=prompt("Desea continuar?: ");
    }while (seguir=='s');

    promedioNotasMenoresAprobados=acumuladorNotaMenoresAprobados/menores;
    promedioAdolescentes= notaAdolescentes/acumuladorAdolescentes;
    promedioMayores=acumuladorNMayores/contadorMayores;
    promedioMasculino= acumuladorNVarones/contadorVarones;
    promedioFemenino= acumuladorNFemenino/contadorFemenino;

    document.write("La cantidad de varones aprobados es :"+varonesAprobados+"</br>");
    document.write("El promedio de los menores de edad es: "+promedioNotasMenoresAprobados+"</br>");
    document.write("El promedio de los adolescentes es de: "+promedioAdolescentes+"</br>");
    document.write("El promedio de los adultos es de: "+promedioMayores+"</br>");
    document.write("El promedio de notas de los varones es de: "+promedioMasculino+"</br>");
    document.write("El promedio de notas de las mujeres es de: "+promedioFemenino+"</br>");
}
