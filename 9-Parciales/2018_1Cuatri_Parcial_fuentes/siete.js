function mostrar()
{

    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var promedioNotas;
    var notaBaja;
    var sexoBajo;
    var varonesMas6 = 0;
    flag =0;

    for (var i =0; i<5;i++)
    {
        nota = parseInt(prompt("Ingrese una nota entre 0 y 10."));
        while (nota <0 || nota >10 ||isNaN(nota))
        {
            nota = parseInt(prompt("Dato invalido.Ingrese una nota entre 0 y 10."));
        }
    
        sexo = prompt("Ingrese su sexo. f o m");
        while (sexo != "f"&& sexo!="m")
        {
            sexo = prompt("Dato invalido. Por favor ingrese su sexo. f o m").toLowerCase(); 
        }

        acumuladorNotas = acumuladorNotas+nota;
        
        if (nota <notaBaja || flag ==0)
        {
            notaBaja=nota;
            sexoBajo=sexo;
            flag=1;
        }
        if (sexo == "m" && nota >=6)
        {
            varonesMas6 ++;
        }
    
    }
    promedioNotas = acumuladorNotas / 5;
    
    alert("El promedio de las notas ingresadas es : "+promedioNotas+
           "\n La nota mas baja es : "+notaBaja+" y el sexo es "+ sexoBajo+
            "\n La cantidad de varones con nota mayor a 6 es: "+varonesMas6);

}
