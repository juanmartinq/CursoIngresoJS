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
    var importeTotal;
    var importeDescuento; 
    var importeFinal;
    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var modelo = document.getElementById("Marca").value;
    
    //Punto A
    if (cantidad >= 6)
    {
        importeTotal = (cantidad * 35);
        importeDescuento = importeTotal*0.5; 
        document.getElementById("precioDescuento").value = importeDescuento;
    }

    //Punto B
    if (cantidad == 5)
    {
        switch (modelo)
        {
            case "ArgentinaLuz" :
                importeTotal = cantidad*35;
                importeDescuento = importeTotal-(importeTotal*0.4);
                document.getElementById("precioDescuento").value = importeDescuento;
                break;

                default :

                importeTotal= cantidad*35;
                importeDescuento=  importeTotal-(importeTotal*0.3);
                document.getElementById("precioDescuento").value = importeDescuento;
        } 

    }

    //Punto C
    if (cantidad == 4)
    {
        switch  (modelo)
        {
            case "ArgentinaLuz" :
            case "FelipeLamparas" :
                importeTotal= cantidad*35;
                importeDescuento = importeTotal-(importeTotal*0.25);
                document.getElementById("precioDescuento").value = importeDescuento;
                break;

            case "JeLuz" :
            case "HazIluminacion" :
            case "Osram" :
                importeTotal = cantidad*35;
                importeDescuento = importetotal-(importetotal*0.2);
                document.getElementById("precioDescuento").value = importeDescuento;
                break;
        }
    }
     
    //Punto E   
    if (cantdad == 3)
    {
        switch (modelo)
        {
         case "ArgentinaLuz" :
         importeTotal= cantidad*35;
         importeDescuento = importetotal-(importeTotal*0.15);
         document.getElementById("precioDescuento").value = importeDescuento;
         break;

         case "FelipeLamparas" :
         importeTotal = cantidad*35;
         importeDescuento = importetotal-(cantidad*0.10);
         document.getElementById("precioDescuento").value = importeDescuento;
         break;
        
         default :
         importeTotal=cantidad*35;
         importeDescuento=importetotal-(importeTotal*0.05);
         document.getElementById("precioDescuento").value = importeDescuento;
        }

    }
    
    if (importeDescuento >120)
    {
        importeFinal=(importeDescuento*0.10)+importeDescuento;
        alert ("Usted pago "+importeFinal+" pesos de IIBB");
    }
}
