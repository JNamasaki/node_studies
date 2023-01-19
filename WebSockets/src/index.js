import express from "express";
import { Server } from "socket.io";
import path from "path";
import { URL } from "url";
import { fileURLToPath } from 'url';
import http from 'http';

const app = express();
const port = process.env.port || 3000;

const caminhoAtual = fileURLToPath(
    import.meta.url);

const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);
servidorHttp.listen(port, () => {
    console.log(`Ouvindo na porta ${port}`);
});

const io = new Server(servidorHttp)

export default io;