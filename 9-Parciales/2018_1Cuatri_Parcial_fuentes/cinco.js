function mostrar()
{
    var planeta = prompt("Ingrese un planeta del sistema solar.")

    switch(planeta)
    {
        case "Mercurio" :
        case "Venus":
        alert ("Aca hace mas calor")
        break;

        case "Tierra" :
        alert ("Aca vivimos");
        break;

        case "Marte" :
        case "Jupiter" :
        case "Saturno" :
        case "Urano" :
        case "Neptuno" :
        case "Pluton" :
        alert("Aca hace mas frio")
        break;

        default :
        ("Esto no es un planeta del sistema solar.")


    }
}
