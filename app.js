// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    //Agregar nombre obtenido a travez del imput
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que no se ingrese un input vacio
    if (nombre === ""){
        alert("Por favor ingrese un nombre valido");
        return;
   }
   // Validar nombres repetidos
   if (amigos.includes(nombre)){
    alert("Ese nombre ya fue introducido");
    return;
   }

   // Agregar amigo a la lista
   amigos.push(nombre);

   // Mostrar amigo en la lista
     let lista = document.getElementById("listaAmigos");

    //Limpiar la lista
    lista.innerHTML = "";

    //Recorrer el array y agregar cada amigo
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    input.value = "";

}

function sortearAmigo(){
    // Comproba que la lista no este vacía
        if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
        }
    // Sorteo del amigo 
    let indice = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[indice];


    //Mostrar el amigo secreto
       let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}