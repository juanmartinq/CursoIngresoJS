/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var valorTemperatura;
var Fahrenheit;
var Celsius;

function FahrenheitCentigrados () 
{
    valorTemperatura=parseInt(document.getElementById("Temperatura").value);
    Celsius = (valorTemperatura-32)/1.8;
    alert (valorTemperatura+ " grados Fahrenheit son "+ Celsius+ " grados centigrados.");
}

function CentigradosFahrenheit () 
{
    valorTemperatura=parseInt(document.getElementById("Temperatura").value);
    Fahrenheit = (valorTemperatura*1.8)+32;
    alert (valorTemperatura+ " grados Centigrados son " + Fahrenheit + " grados Fahrenheit.");
}
