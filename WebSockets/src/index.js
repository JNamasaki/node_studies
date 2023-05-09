import express from "express";
import { Server } from "socket.io";
import path from "path";
import { URL } from "url";
import { fileURLToPath } from 'url';
import http from 'http';
import mongoose from "mongoose";
import db from "./dbConnection.js";
const app = express();
const port = process.env.port || 3000;

const caminhoAtual = fileURLToPath(import.meta.url);

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);
servidorHttp.listen(port, () => {
    console.log(`Ouvindo na porta ${port}`);
});

const io = new Server(servidorHttp)

export default io;