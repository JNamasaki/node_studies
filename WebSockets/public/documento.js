const socket = io();

const textoEditor = document.getElementById("editor-texto");

//código omitido

textoEditor.addEventListener("keyup", () => {
    console.log(textoEditor.value);
});