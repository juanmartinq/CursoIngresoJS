/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var precio = 35;
  var cantidad = parseInt(document.getElementById("Cantdad").value);
  var marca = document.getElementById("Marca").value;
  var porDescuento;
  var descuento;
  var precioconDescuento;
  var importeFinal;
  var IIBB;

  switch (cantidad)
  {
      case 1:
      case 2:
      porDescuento = 0;
      break;

      case 3:
      if ( marca == "ArgentinaLuz") 
      {
        porDescuento = 15;
      } 
      else if  (marca == "FelipeLamparas")
      {
        porDescuento = 10;

      }else
      {
        porDescuento = 5;
      }
      break;
      
      case 4: 
      if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
      {
        porDescuento = 25;
      }else
      {
        porDescuento= 20;
      }
      break;
      
      case 5:
      if (marca == "ArgentinaLuz")
      {
        porDescuento = 40;
      } 
      else 
      {
        porDescuento = 30;
      }
      break;
      
      default :
      porDescuento = 50;
   }

   descuento =  precio * porDescuento /100;
   precioconDescuento = precio - descuento;
   document.getElementById("precioDescuento").value = precioconDescuento;


}
