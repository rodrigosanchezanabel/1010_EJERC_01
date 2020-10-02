/*
Podemos ver los tipos básicos en el siguiente enlace
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
let activo: boolean
// Indica si el valor es verdadero o falso
let valor: number
// a la vez que se declara el tipo see le puede asignar un valor asginado
let cantidad = [2, 4, 8, "h"]
let nombre: string
// al declarar pongo el tipo
let lista: number[]
cantidad = [2, 4, 8, "h"]
// error  por la "h" lista = [2, 4, 8, "h"]
let edad = 30
activo = false
if (!activo) {
    console.log('NO está activo')
}else{
    console.log('Está activo')
}
/* enum da nombres descriptivos a conjuntos de valores numéricos//
Lla enumeración comienza en el 0, pero se puede cambiar manualmente
*/
enum sabores {
    dulce,
    salado = 1,
    amargo,
    agridulce,
}
let s: sabores= sabores.salado;

