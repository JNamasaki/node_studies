import express from "express";
import Cliente from '../models/cliente.js'
const clienteRoute = express.Router();

clienteRoute.post('/', async(req,res) =>{
    try {
        const cliente = await new Cliente(req.body).save();
        res.json({cliente});
    } catch (error) {
        res.json({ error: true, message: error.message});
    }
})

export default clienteRoute ;