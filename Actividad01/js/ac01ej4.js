/*
Descripcion: Actividad01 Ejercicio4 
Desarrollador: Israel Simone Justiniano
Fecha: 2024-04-20
Cambios: Ninguno
*/





// Pedir una frase al usuario y convertirla a minúsculas
var frase = prompt("Ingrese una frase:").toLowerCase();

// Inicializar variables para contar la letra "o" y las vocales
var conteoO = 0;
var conteoVocales = {a: 0, e: 0, i: 0, o: 0, u: 0};

// Recorrer cada caracter de la frase
for (var letra of frase) {
    // Verificar si la letra es "o" y aumentar el contador correspondiente
    if (letra === "o") {
        conteoO++;
    }
    // Verificar si la letra es una vocal y aumentar el contador correspondiente
    if ("aeiu".includes(letra)) {
        conteoVocales[letra]++;
    }
}

// Mostrar resultados en la consola
console.log("Cuantas veces aparece la letra 'o': " + conteoO);
console.log("Las vocales que aparecen: " + Object.keys(conteoVocales).filter(vocal => conteoVocales[vocal] > 0).join(", "));
for (var vocal in conteoVocales) {
    if (conteoVocales[vocal] > 0) {
        console.log("Cuántas veces aparece la vocal '" + vocal + "': " + conteoVocales[vocal]);
    }
}

