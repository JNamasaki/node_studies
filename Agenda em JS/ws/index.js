import express from "express";
// import moongose from "mongose";
import morgan from "morgan";
import db from "./src/controls/dbConnector.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));

// 
app.set('port', 3000);

// 
app.listen(app.get('port'), ()=>{
    console.log(`WS Wscutando na porta ${app.get('port')}`);
});