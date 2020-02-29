function mostrar()
{
    var altura;
    var sexo;
    var i =0;
    var acumuladorAltura =0;
    var promedio;
    var alturaBaja;
    var sexoBajo;
    var mujeresMas190=0;
    var seguir;
    flag =0;

    for (i; i<5;i++)
    {
        altura = parseInt(prompt("Ingrese la altura en centimetros: "));
        while (altura <1 || altura >250 ||isNaN(altura))
        {
            altura = parseInt(prompt("Dato invalido. Ingrese la altura en centimetros: "));

        }

        sexo = prompt("Ingrese el sexo: ").toLowerCase();
        while (sexo !='f' && sexo!='m')
        {
            sexo = prompt("Dato invalido.Ingrese el sexo: ");
        }
        
        acumuladorAltura = acumuladorAltura+altura;
        
            if (altura<alturaBaja || flag ==0)
            {
                alturaBaja=altura;
                sexoBajo=sexo;
                flag =1;
            }

            if (sexo == 'f' && altura >190)
            {
                mujeresMas190++;
            }

        }


    promedio = acumuladorAltura/5;

    alert("El promedio de las alturas ingresadas es de: "+promedio+ 
        "\n La altura mas baja es: "+alturaBaja+ " y el sexo de esa persona es: "+sexoBajo+
        "\n La cantidad de mujeres con altura superior a 190 centimetros es: "+mujeresMas190);


}
