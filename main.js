let nombre = prompt("Por favor indica tu nombre a continuacion").toUpperCase();
let apellido = prompt ("Ahora, por favor dime tu apellido").toUpperCase();
let detalle = "";
const tasaBajoRiesgo = 0.50;
const tasaAltoRiesgo = 0.85;


function saludoInicial (nombre, apellido){
    alert("Hola"+" "+nombre+" "+apellido+"!"+" "+"Te damos la bienvenida a nuestro asesor financiero 100% en linea! \n\nPresiona ACEPTAR para continuar");
}

saludoInicial(nombre, apellido);

alert("Vamos a pedirte algunos datos personales para poder obtener un perfil de riesgo y, de esta manera, poder asesorarte de la mejor forma. \n\nPresiona ACEPTAR para continuar");


/* Medir nivel de riesgo */

let nivelDeRiesgo = Number(prompt("Cuentanos un poco sobre ti y tu nivel de aversion al riesgo contestando mediante esta simple escala de 1 a 10. \n\nSiendo: \n1 => 'Quiero minimizar todo tipo de riesgo' y \n10 => 'No tengo problemas en arriesgar mi capital'\n"));

while (error = true){

    if (nivelDeRiesgo <= 0){
        alert("Ups! Solo se permite escala del 1 al 10. \n\nPresiona ACEPTAR para volver a probar");
        error = true;
        nivelDeRiesgo = Number(prompt("Volver a ingresar: escala del 1 al 10"))
    }else if (nivelDeRiesgo <= 5){
        alert("Genial! Pese a tu bajo nivel de aversion al riesgo tenemos las mejores posibilidades para vos. \n\nPresiona ACEPTAR para continuar");
        error = false;
        break;
    }else if (nivelDeRiesgo <= 8){
        alert("Excelente! Somos especialistas en perfiles equilibrados respecto a sus decisiones financieras. \n\nPresiona ACEPTAR para continuar");
        error = false;
        break;
    }else if (nivelDeRiesgo <= 10){
        alert("Wow! Personas como tu logran grandes cambios a nivel financiero. Felicitaciones! \n\nPresiona ACEPTAR para continuar");
        error = false;
        break;
    }else{
        alert("Ups! Solo se permite escala del 1 al 10. \n\nPresiona ACEPTAR para volver a probar");
        error = true;
        nivelDeRiesgo = Number(prompt("Volver a ingresar: escala del 1 al 10"))
    }
}

alert("Perfecto! Ya sabemos un poco mas sobre ti y tu nivel de aversion al riesgo. Ahora, vamos a hacerte dos simples preguntas para maximizar tu inversion")

/* Calculo de interes */

let capitalInicial = Number(prompt("Cual es el CAPITAL INICIAL que tienes pensado invertir?"));
let plazoInversion = Number(prompt("Cual es el HORIZONTE, en meses, que estas pensando para tu inversion"));

let montoFinal = capitalInicial;

if (nivelDeRiesgo <= 8){
    for (let i = 1; i <= plazoInversion; i++) {
        const montoInteres = montoFinal * (tasaBajoRiesgo / 12);
        montoFinal += montoInteres;
        detalle += "Periodo: "+i+
                    "\nCapital Inicial: $"+capitalInicial+
                    "\nInteres: $"+montoInteres+
                    "\nMonto Final: $"+montoFinal+
                    "\n\n";
    }
}else{
    for (let i = 1; i <= plazoInversion; i++) {
        const montoInteres = montoFinal * (tasaAltoRiesgo / 12);
        montoFinal += montoInteres;
        detalle += "Periodo: "+i+
                    "\nCapital Inicial: $"+capitalInicial+
                    "\nInteres: $"+montoInteres+
                    "\nMonto Final: $"+montoFinal+
                    "\n\n";
    }
}

alert("Muchas gracias"+" "+nombre+" "+"por haber utilizado nuestra plataforma de simulacion. Te dejamos el detalle de tu Plazo Fijo:\n\n"+detalle);