import express from "express";
import Cliente from '../models/cliente.js'
const clienteRoute = express.Router();

clienteRoute.post('/', async(req,res) =>{
    try {
        const salao = await new Salao(req.body).save();
        res.json({salao})
    } catch (error) {
        res.json({ error: true, message: error.message})
    }
})

export default clienteRoute ;