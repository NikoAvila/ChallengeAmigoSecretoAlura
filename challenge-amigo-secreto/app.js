// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';//limpiar campo input
}

function agregarAmigo(){

    let validarPalabra = /^[A-Za-z]+$/;//admitir solo letras
    let amigo = document.getElementById('amigo').value;//obtener o capturar dato del input
    ListaAmigos.innerHTML='';//Limpiar la lista o que este seteada

    if(amigo.trim() === ""){
        console.log("Por favor ingresar un nombre valido.");//condicion para una palabra vacia
        alert("Por favor ingresar un nombre valido.");//alerta para una palabra vacia
        return;
    }else{
        if (validarPalabra.test(amigo)){
        
            ListaAmigos.push(amigo);//agregar el amigo a la lista
            let listaAmigosHTML = document.getElementById('listaAmigos');
            listaAmigosHTML.innerHTML = '';
            for (let i = 0; i < ListaAmigos.length; i++) { //listar o recorrer los elementos del arreglo en el tag li y visualizarlos
                let nuevoElementoLi = document.createElement('li');
                nuevoElementoLi.textContent = ListaAmigos[i];
                listaAmigosHTML.appendChild(nuevoElementoLi);
                console.log(nuevoElementoLi);
            }
        }else{
            console.log("Nombre contiene numeros o caracteres especiales, por favor ingresar un nombre valido.");//palabra si contiene caracter especial o numero
            alert("Nombre contiene numeros o caracteres especiales, por favor ingresar un nombre valido.");//alerta si contiene caracter especial o numero
            return;
        }
    }
    console.log(ListaAmigos);
    limpiarCaja();
}

function sortearAmigo(){
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';

    if (ListaAmigos.length === 0) {
        resultadoHTML.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";//indicar mensaje si no se han agregado amigos.
        return;
    }

    let resultado = Math.floor(Math.random()*(ListaAmigos.length));
    console.log(resultado);//revisar dato aleatorio que se recibe 

    let resultadoContenido = document.createElement('li');

    resultadoContenido.textContent = "Tu amigo secreto sorteado es: " + ListaAmigos[resultado];//texto ganador del amigos secreto
    console.log("Tu amigo secreto sorteado es: "+resultadoContenido);
    resultadoHTML.appendChild(resultadoContenido);//enviar texto definido anteriormente al archivo index.html
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = ''; //Limpiar la lista
    limpiarCaja();
}

