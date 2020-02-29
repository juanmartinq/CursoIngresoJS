function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var temperaturaMinima;
    var cantidadTPares=0;
    var paisMenosGente;
    var minimoHabitantes;
    var contadorTmas40=0;
    var promedioHabitantes;
    var paisFrio;
    var flag=0;
    var seguir;
    var contadorHabitantes=0;
    var contadorPais=0;

    do 
    {
        pais = prompt("Ingrese el nombre del pais");
        
        habitantes= parseInt(prompt("Ingrese la cantidad de habitantes: "));
        while (habitantes <1 || habitantes>7000 ||isNaN(habitantes))
        {
            habitantes= parseInt(prompt("Dato invalido. Ingrese la cantidad de habitantes: "));
        }
    
        temperatura = parseInt(prompt("Ingrese la temperatura: "));
        while (temperatura <-50 || temperatura>50 ||isNaN(temperatura))
        {
            temperatura= parseInt(prompt("Dato invalido. Ingrese la temperatura: "));
        }

        if (temperatura%2==0)
        {
            cantidadTPares++;
        }
        if (habitantes<minimoHabitantes|| flag==0)
        {
            minimoHabitantes=habitantes;
            paisMenosGente=pais;
        }
        if (temperatura>40)
        {
            contadorTmas40++;
        }

        if (temperatura<temperaturaMinima || flag==0)
        {
            temperaturaMinima=temperatura;
            paisFrio=pais;
            flag=1;

        }

        contadorHabitantes=contadorHabitantes+habitantes;
        contadorPais++;

    
        seguir= prompt("Desea continuar?: ");
    
    }while (seguir =='s');

    promedioHabitantes=contadorHabitantes/contadorPais;

    document.write("La cantidad de temperaturas pares ingresadas es:"+cantidadTPares+"</br>");
    document.write("El pais con menos habitantes es:"+ paisMenosGente+"</br>");
    document.write("La cantidad de paises cuya temperatura supera los 40 grados es:"+contadorTmas40+"</br>");
    document.write("El promedio de habitantes entre los paises ingresados es de: "+promedioHabitantes+"</br>");
    document.write("La temperatura minima ingresada es de"+temperaturaMinima+" y se registro en el pais de "+paisFrio+"</br>");
}
