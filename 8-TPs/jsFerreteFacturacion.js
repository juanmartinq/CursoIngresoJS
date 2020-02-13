/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno = parseInt(document.getElementById("PrecioUno").value);
var precioDos = parseInt(document.getElementById("PrecioDos").value);
var precioTres = parseInt(document.getElementById("PrecioTres").value);
var suma
var promedio
var precioFinal

function Sumar () 
{
    suma = precioUno+precioDos+precioTres;
    alert("La suma del valor de los productos es: " + suma);
}
function Promedio () 
{
    promedio = (precioUno+precioDos+precioTres) /3;
    alert("El promedio del valor de los productos es " + promedio);
}
function PrecioFinal () 
{
    precioFinal = (suma *0.21) +suma;
    alert("El precio final (IVA incluido) es: "+ precioFinal);
}