function mostrar()
{
var numero;
var i = 1;
var divisores=0;

numero =parseInt(prompt("Ingrese un numero"));
while (isNaN(numero) || numero == 0)
{
    numero = parseInt(prompt("Dato invalido. Ingrese un numero valido."));
}

for (i; i <=numero; i++)
{
    if (numero % i ==0)
    {
        console.log(i);
        divisores++;
    }

}
console.log("La cantidad de numeros divisores es "+divisores);






}//FIN DE LA FUNCIÓN