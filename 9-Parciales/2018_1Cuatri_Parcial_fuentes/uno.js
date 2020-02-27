
function mostrar()
{
    var largo = parseInt(prompt("Ingrese el largo del rectangulo"));
    var ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));

    var perimetro = (ancho*2) + (largo*2);
    alert ("El perimetro del rectangulo es "+perimetro);
}
