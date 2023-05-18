import express from "express";
import Cliente from '../models/cliente.js'
import Colaborador from "../models/colaborador.js";
const colaboradorRoute = express.Router();

colaboradorRoute.post('/', async(req,res) =>{
    try {
        const colaborador = await new Colaborador(req.body).save();
        res.json({colaborador});
    } catch (error) {
        res.json({ error: true, message: error.message});
    }
})

export default colaboradorRoute ;