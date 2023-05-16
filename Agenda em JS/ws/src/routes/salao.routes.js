import express from "express";
import Salao from '../models/salao.js'
const salaoRoute = express.Router();

salaoRoute.post('/', async(req,res) =>{
    try {
        const salao = await new Salao(req.body).save();
        res.json({salao})
    } catch (error) {
        res.json({ error: true, message: error.message})
    }
})

export default salaoRoute ;