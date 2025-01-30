// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let listaAmigos = [];
//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
let lista = document.getElementById('listaAmigos');

//Implementa una función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    console.log(amigo);
    if (amigo == ""){
        alert("Por favor, inserte un nombre.")
    } else {
        //Actualizar el array de amigos
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    }
    limpiarCaja();
    limpiarLista();
    actualizarLista();
    return
}

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
function limpiarLista(){
    lista.innerHTML = " ";
    return;
}

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

function actualizarLista(){
    let listaHTML = "";
    for (let amigo of listaAmigos){
        listaHTML += `<li>${amigo}</li>`;
        console.log(listaHTML)
    }
    lista.innerHTML = listaHTML;
}

//Implementa una función para sortear los amigos

/*
Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() 
e innerHTML para mostrar el amigo sorteado.*/