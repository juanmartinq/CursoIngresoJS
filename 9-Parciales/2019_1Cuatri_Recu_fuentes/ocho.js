function mostrar()
{
    var color;
    var precio;
    var seguir;
    var contadorRojos=0;
    var contadorRojos5000=0;
    var contadorM5000=0;
    var promedioPrecio;
    var contadorPrecio=0;
    var contadorAutos=0;
    var masCaro;
    var coloCaro;
    var flag=0;
    
    do
    {
        color = prompt("Ingrese un color");
        while (!(color == 'verde' || color =='rojo' || color =='amarillo' ))
        {
            color = prompt("Dato invalido. Ingrese un color");
        }
        
        precio = parseInt(prompt("Ingrese el precio: "));
        while (precio <0 || precio >10000 || isNaN(precio))
        {
            precio = parseInt(prompt("Dato invallido. Ingrese el precio: "));
        }

        contadorPrecio=contadorPrecio+precio;

        if (color=='rojo')
        {
            contadorRojos++;
        }

        if(color=='rojo'&& precio>5000)
        {
            contadorRojos5000++;
        }

        if (precio <5000)
        {
            contadorM5000++;
        }
        
        if(precio>masCaro || flag==0)
        {
            masCaro=precio;
            coloCaro=color;
            flag=1;
        }
        contadorAutos++;

        seguir= prompt("Desea continuar?: ");
      }while (seguir=='s');

      promedioPrecio=contadorPrecio/contadorAutos;

      document.write("La cantidad de autos rojos es: "+contadorRojos+"</br>");
      document.write("La cantidad de autos rojos con un precio superior a 5000 es: "+contadorRojos5000+"</br>");
      document.write("La cantidad de vehiculos con precio inferior a 5000 es: "+contadorM5000+"</br>");
      document.write("El promedio de valor de los vehiculos ingresados es de: "+promedioPrecio+"</br>");
      document.write("El auto mas caro ingresado vale: "+masCaro+" y es de color " +coloCaro+"</br>");
}
