// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    console.log(amigo);
    if (amigo == ""){
        alert("Por favor, inserte un nombre.")
    }
    return
}

//Actualizar el array de amigos: Si el valor es válido,
//  añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

agregarAmigo();