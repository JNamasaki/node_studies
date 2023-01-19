import io from "./index.js"

io.on("connection", (socket) => {
    console.log(`Novo cliente conectado ID: ${socket.id}`)

    socket.on("texto_editor", (texto) => {
        console.log(texto)
    })
})