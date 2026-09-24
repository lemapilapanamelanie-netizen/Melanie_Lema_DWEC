console.log("¡Hola DWEC! Mi taller ya funciona.");
const boton = document.getElementById("miBoton");
const aviso = document.getElementById("aviso");

let contador = 0;

boton.addEventListener("click", function () {
  contador = contador + 1;
  aviso.textContent = "Has pulsado el botón " + contador + " veces.";
});
const botonModoNoche = document.getElementById("modonoche");

botonModoNoche.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botonModoNoche.textContent = "☀️ Modo noche";
    } else {
        botonModoNoche.textContent = "🌙 Modo claro";
    }
});

