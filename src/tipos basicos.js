"use strict";
/*
Podemos ver los tipos básicos en el siguiente enlace
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
let activo;
// Indica si el valor es verdadero o falso
let valor;
// a la vez que se declara el tipo see le puede asignar un valor asginado
let cantidad = [2, 4, 8, "h"];
let nombre;
// al declarar pongo el tipo
let lista;
cantidad = [2, 4, 8, "h"];
// error  por la "h" lista = [2, 4, 8, "h"]
let edad = 30;
activo = false;
if (!activo) {
    console.log('NO está activo');
}
else {
    console.log('Está activo');
}
/* enum da nombres descriptivos a conjuntos de valores numéricos//
Lla enumeración comienza en el 0, pero se puede cambiar manualmente
*/
var sabores;
(function (sabores) {
    sabores[sabores["dulce"] = 0] = "dulce";
    sabores[sabores["salado"] = 1] = "salado";
    sabores[sabores["amargo"] = 2] = "amargo";
    sabores[sabores["agridulce"] = 3] = "agridulce";
})(sabores || (sabores = {}));
let s = sabores.salado;
