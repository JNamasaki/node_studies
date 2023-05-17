import express from "express";
import Cliente from '../models/cliente.js'
import colaborador from "../models/colaborador.js";
const colaboradorRoute = express.Router();

colaboradorRoute.post('/', async(req,res) =>{
    try {
        const cliente = await new colaborador(req.body).save();
        res.json({colaborador});
    } catch (error) {
        res.json({ error: true, message: error.message});
    }
})

export default colaboradorRoute ;