import express from "express";
import Salao from '../models/salao.js'
import Servico from '../models/servico.js';
const salaoRoute = express.Router();

salaoRoute.post('/', async(req,res) =>{
    try {
        const salao = await new Salao(req.body).save();
        res.json({salao})
    } catch (error) {
        res.json({ error: true, message: error.message})
    }
})

salaoRoute.get('/servicos/:salaoId',async (req,res)=>{
    try {
        const { salaoId } = req.params;
        const servicos = await Servico.find({
            salaoId,
            status:'ativo'
        }).selet('_id titulo');

        // [{ label/titulo: XXX value/Id: XXXXX}]
        res.json({
            servicos: servicos.map(s => ({label: s.titulo, value: s._id}))
        });
    } catch (error) {
        res.json({ error: true, message: error.message})
    }
})

export default salaoRoute ;