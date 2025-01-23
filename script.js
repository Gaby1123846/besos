const boton = document.getElementById("besos");
boton.addEventListener("click", ()=>{

    const nuevoparrafo = document.createElement("p");
    nuevoparrafo.textContent = "besos";
    document.body.appendChild(nuevoparrafo);
})
