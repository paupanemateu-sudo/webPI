function cambiarTexto() {

    const texto = document.getElementById("texto-cambio");

    if (texto.innerHTML === "Fes click al botó.") {

        texto.innerHTML = "S'abril combina tradició, cafè i vermut amb una estètica mediterrània moderna.";

    } else {

        texto.innerHTML = "Fes click al botó.";

    }

}