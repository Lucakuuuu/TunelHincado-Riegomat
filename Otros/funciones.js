function cambiarColor() {
    document.body.style.backgroundColor = "rgb(37, 37, 37)";
    document.body.style.color = "white";

    const bloques1 = document.querySelectorAll(".bloque1");
    bloques1.forEach(bloque => {
        bloque.style.backgroundColor = "rgb(55, 78, 85)";
        bloque.style.color = "black";
    });

    const bloques2 = document.querySelectorAll(".bloque2");
    bloques2.forEach(bloque => {
        bloque.style.backgroundColor = "rgb(90, 56, 24)";
        bloque.style.color = "black";
    });

    const botonDiv = document.querySelector("#boton-container");
    botonDiv.innerHTML = '<button onclick="volverColor()">Modo claro</button>';
}

function volverColor() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    const bloques1 = document.querySelectorAll(".bloque1");
    bloques1.forEach(bloque => {
        bloque.style.backgroundColor = "lightblue";
        bloque.style.color = "black";
    });

    const bloques2 = document.querySelectorAll(".bloque2");
    bloques2.forEach(bloque => {
        bloque.style.backgroundColor = "rgb(233, 145, 63)";
        bloque.style.color = "black";
    });

    const botonDiv = document.querySelector("#boton-container");
    botonDiv.innerHTML = '<button onclick="cambiarColor()">Modo oscuro</button>';
}
