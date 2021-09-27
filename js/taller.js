/**Colocar fecha */
var d = new Date();
function days() {
    var day = d.getDay();
    switch (day) {
        case 0:
            return "Domingo";
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado";
        default:
            break;
    }
}
function months() {
    var mon = d.getMonth();
    switch (mon) {
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Abrir";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";
        default:
            break;
    }
}
function fecha() {
    document.write(
        days(),
        ", " + d.getDate(),
        " de " + months(),
        " de " + d.getFullYear()
    );
}
var cont = 0;
var c1=0,
    c2=0,
    c3=0,
    c4=0,
    nota_final = 0;
var prom_aprob = 0,
    prom_noAprob = 0,
    prom = 0;
var cont_aprobaron = 0,
    cont_noAprobaron = 0,
    nota = 0,
    nota_noAprob = 0,
    nota_aprob = 0,
    notaFinal_Aprobaron = 0,
    notaFinal_noAprobaron = 0;
var cont_c1Aprobados = 0,
    cont_c1NoAprobados = 0;
var cont_c2Aprobados = 0,
    cont_c2NoAprobados = 0;
var cont_c3Aprobados = 0,
    cont_c3NoAprobados = 0;
var cont_c4Aprobados = 0,
    cont_c4NoAprobados = 0;
var promDeficiente = 0,
    promBajo = 0,
    promBasico = 0,
    promAlto = 0,
    promSuperior = 0;
var contDeficiente = 0,
    contBajo = 0,
    contBasico = 0,
    contAlto = 0,
    contSuperior = 0;
var promFinalDeficiente = 0,
    promFinalBajo = 0,
    promFinalBasico = 0,
    promFinalAlto = 0,
    promFinalSuperior = 0;
var promNotaDeficiente = 0,
    promNotaBajo = 0,
    promNotaBasico = 0,
    promNotaAlto = 0,
    promNotaSuperior = 0;
function Notas() {
    var t = 1,
        tr=0,
        p=0,
        t2=0,
        tr2=0,
        ex2=0,
        p2=0,
        t3=0,
        tr3=0,
        p3=0,
        t4=0,
        tr4=0,
        ex4=0,
        p4=0;
    while (t > 0) {
        /**corte 1 */
        t = prompt('"0" para Salir\nDame la nota del taller 1', "");
        if (t == 0) {
            break;
        }
        tr = prompt("1er corte\nDame la nota del trabajo", "");
        p = prompt("1er corte\nDame la nota del parcial", "");
        var nota_c1 = t * 0.2 + tr * 0.2 + p * 0.6;
        if (nota_c1 >= 3 && nota_c1 <= 5) {
            cont_c1Aprobados++;
        } else if (nota_c1 < 3 && nota_c1 >= 1) {
            cont_c1NoAprobados++;
        } else {
            alert("Fuera de rango");
        }
        t2 = prompt("2do corte\nDame la nota del taller", "");
        tr2 = prompt("2do corte\nDame la nota del trabajo", "");
        ex2 = prompt("2do corte\nDame la nota de la exposicion", "");
        p2 = prompt("2do corte\nDame la nota del parcial", "");
        var nota_c2 = t2 * 0.2 + tr2 * 0.1 + ex2 * 0.2 + p2 * 0.5;
        if (nota_c2 >= 3 && nota_c2 <= 5) {
            cont_c2Aprobados++;
        } else if (nota_c2 < 3 && nota_c2 >= 1) {
            cont_c2NoAprobados++;
        } else {
            alert("Fuera de rango");
        }
        t3 = prompt("3er corte\nDame la nota del taller", "");
        tr3 = prompt("3er corte\nDame la nota del trabajo", "");
        p3 = prompt("3er corte\nDame la nota del parcial", "");
        var nota_c3 = t3 * 0.2 + tr3 * 0.2 + p3 * 0.6;
        if (nota_c3 >= 3 && nota_c3 <= 5) {
            cont_c3Aprobados++;
        } else if (nota_c3 < 3 && nota_c3 >= 1) {
            cont_c3NoAprobados++;
        } else {
            alert("Fuera de rango");
        }
        t4 = prompt("4to corte\nDame la nota del taller", "");
        tr4 = prompt("4to corte\nDame la nota del trabajo", "");
        ex4 = prompt("4to corte\nDame la nota de la exposicion", "");
        p4 = prompt("4to corte\nDame la nota del parcial", "");
        var nota_c4 = t4 * 0.2 + tr4 * 0.1 + ex4 * 0.2 + p4 * 0.5;
        if (nota_c4 >= 3 && nota_c4 <= 5) {
            cont_c4Aprobados++;
        } else if (nota_c4 < 3 && nota_c4 >= 1) {
            cont_c4NoAprobados++;
        } else {
            alert("Fuera de rango");
        }
        cont++;
        c1 = t * 0.2 + tr * 0.2 + p * 0.6;
        c2 = t2 * 0.2 + tr2 * 0.1 + ex2 * 0.2 + p2 * 0.5;
        c3 = t3 * 0.2 + tr3 * 0.2 + p3 * 0.6;
        c4 = t4 * 0.2 + tr4 * 0.1 + ex4 * 0.2 + p4 * 0.5;

        nota = c1 * 0.25 + c2 * 0.25 + c3 * 0.25 + c4 * 0.25;
        nota_final += c1 * 0.25 + c2 * 0.25 + c3 * 0.25 + c4 * 0.25;

        if (nota >= 3 && nota <= 5) {
            cont_aprobaron++;
            nota_aprob = nota;
            notaFinal_Aprobaron += nota_aprob;
        } else if (nota < 3 && nota >= 1) {
            cont_noAprobaron++;
            nota_noAprob = nota;
            notaFinal_noAprobaron += nota_noAprob;
        } else {
            alert("fuera de rango");
        }
        prom_aprob = notaFinal_Aprobaron / cont_aprobaron;
        prom_noAprob = notaFinal_noAprobaron / cont_noAprobaron;

        if (nota_noAprob > 0 && nota_noAprob <= 2) {
            contDeficiente++;
            promDeficiente = nota_noAprob;
            promFinalDeficiente += promDeficiente;
        }
        if (nota_noAprob > 2 && nota_noAprob < 3 || nota_aprob == 3) {
            contBajo++;
            promBajo = nota_noAprob || nota_aprob;
            promFinalBajo += promBajo;
        }
        if (nota_aprob > 3 && nota_aprob <= 4) {
            contBasico++;
            promBasico = nota_aprob;
            promFinalBasico += promBasico;
        }
        if (nota_aprob > 4 && nota_aprob <= 4.5) {
            contAlto++;
            promAlto = nota_aprob;
            promFinalAlto += promAlto;
        }
        if (nota_aprob > 4.5 && nota_aprob <= 5) {
            contSuperior++;
            promSuperior = nota_aprob;
            promFinalSuperior += promSuperior;
        }
        promNotaDeficiente = promFinalDeficiente / contDeficiente;
        promNotaBajo = promFinalBajo / contBajo;
        promNotaBasico = promFinalBasico / contBasico;
        promNotaAlto = promFinalAlto / contAlto;
        promNotaSuperior = promFinalSuperior / contSuperior;
    }

    console.log("Estudiantes aprobados: " + cont_aprobaron);
    console.log("Estudiantes reprobados: " + cont_noAprobaron);
    console.log("Promedio de notas aprobaron: " + prom_aprob);
    console.log("Promedio de notas reprobados: " + prom_noAprob);

    console.log(
        "Estudiantes que aprobaron el 1er periodo: " +
        cont_c1Aprobados +
        "\nEstudiantes que reprobaron el 1er periodo: " +
        cont_c1NoAprobados
    );

    console.log(
        "Estudiantes que aprobaron el 2do periodo: " +
        cont_c2Aprobados +
        "\nEstudiantes que reprobaron el 2do periodo: " +
        cont_c2NoAprobados
    );

    console.log(
        "Estudiantes que aprobaron el 3er periodo: " +
        cont_c3Aprobados +
        "\nEstudiantes que reprobaron el 3er periodo: " +
        cont_c3NoAprobados
    );

    console.log(
        "Estudiantes que aprobaron el 4to periodo: " +
        cont_c4Aprobados +
        "\nEstudiantes que reprobaron el 4to periodo: " +
        cont_c4NoAprobados
    );

    console.log("Promedio de notas Deficientes: " + promNotaDeficiente);
    console.log("Promedio de notas Bajas: " + promNotaBajo);
    console.log("Promedio de notas Basicos: " + promNotaBasico);
    console.log("Promedio de notas Altas: " + promNotaAlto);
    console.log("Promedio de notas Superior: " + promNotaSuperior);

    console.log("Cantidad Total de Estudiantes: " + cont);

    document.getElementById("Promedio_Estudiantes_Aprobaron").innerHTML =
        "" + prom_aprob;
    document.getElementById("Promedio_Estudiantes_Reprobaron").innerHTML =
        "" + prom_noAprob;
    document.getElementById("Estudiantes_aprobados").innerHTML =
        "" + cont_aprobaron;
    document.getElementById("Estudiantes_reprobados").innerHTML =
        "" + cont_noAprobaron;

    document.getElementById("aprobadoscorte1").innerHTML = "" + cont_c1Aprobados;
    document.getElementById("reprobadoscorte1").innerHTML =
        "" + cont_c1NoAprobados;
    document.getElementById("aprobadoscorte2").innerHTML = "" + cont_c2Aprobados;
    document.getElementById("reprobadoscorte2").innerHTML =
        "" + cont_c2NoAprobados;
    document.getElementById("aprobadoscorte3").innerHTML = "" + cont_c3Aprobados;
    document.getElementById("reprobadoscorte3").innerHTML =
        "" + cont_c3NoAprobados;
    document.getElementById("aprobadoscorte4").innerHTML = "" + cont_c4Aprobados;
    document.getElementById("reprobadoscorte4").innerHTML =
        "" + cont_c4NoAprobados;

    document.getElementById("promedio_deficiente").innerHTML =
        "" + promNotaDeficiente;
    document.getElementById("promedio_bajo").innerHTML = "" + promNotaBajo;
    document.getElementById("promedio_basico").innerHTML = "" + promNotaBasico;
    document.getElementById("promedio_alto").innerHTML = "" + promNotaAlto;
    document.getElementById("promedio_superior").innerHTML =
        "" + promNotaSuperior;

    document.getElementById("cantidad_total_estudiantes").innerHTML = "Cantidad Total De Estudiantes: " + cont;

}
function Validacion() {
    var todo_correcto = true;
    if (document.getElementById('nombreDocente').value.length < 2) {
        todo_correcto = false;
    }
    if (document.getElementById('contraseña').value != "admin") {
        todo_correcto = false;
    }
    if (!todo_correcto) {
        alert('Vuelva a revisar los datos');
    } else {
        window.location.assign("html/Resultados.html");

    }
}
