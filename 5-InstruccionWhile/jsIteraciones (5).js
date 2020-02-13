function mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById('Sexo').value=sexo;

var x =0
var i = 0

while (sexo == "f" && x==0)
{
    alert ("Femenino")
    x++
}
while (sexo=="m" && i==0)
{
    alert("Masculino")
    i++
}

}//FIN DE LA FUNCIÓN