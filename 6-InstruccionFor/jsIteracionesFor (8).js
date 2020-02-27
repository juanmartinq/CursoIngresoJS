function mostrar()
{

var numero;

numero = parseInt(prompt("Ingrese un numero"));
while (isNaN(numero))
{
    numero=parseInt(prompt("Dato invalido. Ingrese un numero"));
}
if (numero%2 ==0 )
{
    console.log("El numero NO es primo");
}
else 
{
    console.log("El numero es primo.")
}




}//FIN DE LA FUNCIÓN