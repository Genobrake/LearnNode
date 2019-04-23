//console.log('Hola Puto mundo');
//alert('Ramincito was here');
/**Asignación de Parametrors*/
// function PruebaAngular(parametro1 : string, parametro2 : string, parametro3 : string){            //Caso 1
// function PruebaAngular(parametro1 : string, parametro2 : string = "Joder", parametro3? : string){ //Caso 2
//     console.log("Cadena 1: " + parametro1);
//     console.log("Cadena 2: " + parametro2);
//     console.log("Cadena 3: " + parametro3);
// }
//PruebaAngular ("Ramin", "Puto", "Panduro");       //Caso 1
// PruebaAngular("Ramin")                           //Caso 2
/**Funciones de Flecha vs Funciones tradicionales**/
//Función Tradicional
// var sumarNumeros = function (parametro1: number, parametro2: number){
//     return parametro1 + parametro2;
// }
// let resultado = sumarNumeros(100, 200);
// console.log ("Resultado: " + resultado);
//Función de Flecha
// var sumarNumeros = (parametro1: number, parametro2: number) =>{
//     return parametro1 + parametro2;
// }
// let resultado = sumarNumeros(150, 250);
// console.log ("Resultado: " + resultado);
/**Promesas en ES**/
var mipromesa = new Promise(function (resolve, reject) {
    //resolve();    //Se ejecuta Finalizó correctamente
    reject(); //Se ejecuta finalizó con error
});
mipromesa.then(function () {
    console.log('La operación de la promesa finalizó correctamente');
}, function () {
    console.log('La operación de la promesa finalizó con error');
});
