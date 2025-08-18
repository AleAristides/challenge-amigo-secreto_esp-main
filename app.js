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
   }

   // Agregar amigo a la lista
   amigos.push(nombre);

   // Mostrar amigo en la lista
   let lista = document.getElementById("listaAmigos");
   let item = document.createElement("li");
   item.textContent = nombre;
   lista.appendChild(item);

   //limpiar campo
   input.value = "";

}

function sortearAmigo(){
    
    // Sorteo del amigo 
    let indice = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[indice];


    //Mostrar el amigo secreto
    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSecreto}`;
}