function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);

if (edad > 17 || edad <13)
{
    alert ("No es adolescente");
}

}