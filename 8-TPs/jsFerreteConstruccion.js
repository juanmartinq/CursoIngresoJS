/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largoTerreno = parseInt(document.getElementById("Largo").value)
var anchoTerreno = parseInt(document.getElementById("Ancho").value)
var radioTerreno = parseInt(document.getElementById("Radio").value)
var rectangulo
var circulo
var contraPiso

function Rectangulo () 
{
    var largoTerreno = parseInt(document.getElementById("Largo").value)
var anchoTerreno = parseInt(document.getElementById("Ancho").value)
var radioTerreno = parseInt(document.getElementById("Radio").value)
    var rectangulo = ((largoTerreno*2)+(anchoTerreno*2))*3;
    alert ("Para alambrar 3 veces el terreno rectangular se necesitan comprar "+ rectangulo + " metros de alambre.")

}
function Circulo () 
{
    var radioTerreno = parseInt(document.getElementById("Radio").value)
    var circulo = (radioTerreno*2)*3;
    alert ("Para alambrar 3 veces el terreno circular se deben comprar "+circulo +(" metros de alambre."));
}
function Materiales () 
{
	
}