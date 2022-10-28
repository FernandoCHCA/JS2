let apps = ['win10','vscode','oracle']

let computadora = {
    "Marca":"",
    "Discoduro":"1tb",
    "Precio":1200,
    "SoftwareInstalado":apps
}

let alumno =["Mario","Luis"];

console.log(alumno)

console.log(alumno[0],alumno[1])

console.log("Total de Alumnos", alumno.length);

console.log(`Total de Alumnos ${alumno.length}`);

console.log(`Primer Alummno: ${alumno[0]}`);

console.log(alumno[alumno.length-1]);

console.log(typeof alumno)

let grupo51 = {
    "nombre":"Grupo51",
    "Semestre":5,
    "Carrera":"LTI",
    "alumnos":alumno
};

console.log(`Nombre: ${grupo51["nombre"]}`)

console.log(`Nombre: ${grupo51.nombre}`)

console.log(`Primer alumno ${grupo51.alumnos[0]}`);

document.write("<h1>Hola</h1>")
document.write("<marquee>mensaje</marquee>")
document.write("<ul><li>Elemento1</li><li>Elemento1</li></ul>")
document.write(`<ul>
                    <li>
                        Elemento1
                    </li>
                    <li>
                        Elemento3
                    </li>
                </ul>`);

/* If compuesto */
/* if(condicion){
    sentencia
} */

/* If anidado */
/* if(condicion){
    sentencia
}else{
    sentencia
} */

/* if anidado */

/* if(condicion){
    sentencia
}else if(condicion){
    sentencia
}else if(condicion){
    sentencia
}else{
    sentencia
} */

let estadoCivil = "Soltero";

switch (estadoCivil){
    case "Soltero":
        /* Sentencia */
        console.log("Estas soltero")
        break;
    case "Casado":
        /* Sentencia */
        console.log("Estas casado")
        break;
    case "Viudo":
        /* Sentencia */
        console.log("Estas viudo")
        break;
    default:
        /* Sentencia */
        console.log("No tienes ningun estado civil")
        break;
}

let numero = 1

while(numero<11){
    console.log("whileCiclo",numero);
    numero++;
}

numero = 0;

do{
    console.log("doWhileCiclo",numero)
    numero++;
}while(numero<11);

numero = 0;

for(let index =0; index<11;index++){
    console.log("For ciclo",index)
}

let calif = 45;

if(calif >= 95 && calif<=100){
    console.log("Excelente")
}else{
    console.log("No excelente")
}

let horasTrabajadas = 41;
let pagoXHora = 10;
let horasExtra = 0
let totalAPagar= 0

if(horasTrabajadas >40){
    horasExtra = horasTrabajadas - 40
};

totalAPagar = pagoXHora * (horasTrabajadas-horasExtra) + pagoXHora*3*horasExtra;
console.log(totalAPagar);