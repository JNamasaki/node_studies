import Express, { Router } from 'express';
import livros from '../models/Livro.js';
import LivroController from '../controller/livrosController.js';


const router = Express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .post('/livros', LivroController.cadastrarLivros)

export default router;