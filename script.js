// DIVS
let confirmaciones = document.querySelector("confirmaciones");
let botonCargar = document.querySelector("#cargar");
let botonRefrescar = document.querySelector("#refrescar");
let listaDesordeada = document.querySelector("ul");
// INPUTS
let inputTitulo = document.querySelector("#titulo");
let inputAutor = document.querySelector("#autor");
let inputDireccion = document.querySelector("#direccion");
// class
class Pedido {
    constructor(titulo, autor, direccion) {
      this.titulo = titulo;
      this.autor = autor;
      this.direccion = direccion;
      this.cargarItems(titulo, autor, direccion);
    }
    cargarItems(titulo, autor, direccion){
      let newLi = document.createElement("li");
      newLi.textContent = `✓ El libro titulado ${this.titulo}, del autor ${this.autor} será llevado a la dirección ${this.direccion}.`;
      listaDesordeada.appendChild(newLi)
    }
}

function clearInputs(){
  for(let i = 0; i < arguments.length; i++){
    arguments[i].value = ""
  }
}


botonCargar.addEventListener("click", () =>{
  let nuevoPedido = new Pedido(inputTitulo.value, inputAutor.value, inputDireccion.value)
  clearInputs(inputTitulo, inputAutor, inputDireccion)
})