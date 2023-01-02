import express from "express";
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app)

app.get("/livros", (req, res) => {

    res.status(200).json(livros)

})
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})


app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
})
app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;

    livros.remove(id)
    res.send(`Livro ${id} removido com sucesso`);

})
export default app