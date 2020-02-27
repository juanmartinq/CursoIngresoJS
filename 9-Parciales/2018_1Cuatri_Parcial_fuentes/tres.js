function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio."));
    var descuento = parseInt(prompt("Ingrese el descuento."));
    var precioDescuento = precio * descuento/100
    var precioFinal = precio - precioDescuento;
    document.getElementById("elPrecioFinal").value = precioFinal;

}
