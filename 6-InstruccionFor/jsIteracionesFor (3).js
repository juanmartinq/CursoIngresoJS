function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
while (isNaN (repeticiones) || repeticiones<1)
{
    repeticiones = parseInt(prompt("Dato invalido. Ingrese el número de repeticiones"));
}
for (var contador = 1; contador <=repeticiones;contador++)

 document.write ("Hola UTN FRA"+"</br>");




}//FIN DE LA FUNCIÓN