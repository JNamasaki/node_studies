import mongoose, { Schema } from "mongoose";

const horario = new Schema({
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    colaboradorId: [{type: mongoose.Types.ObjectId, ref: 'Colaborador'}],
    servicoId:[{type: mongoose.Types.ObjectId, ref: 'Servico'}],
    dias:{type:[Number], required:true},
    inicio: Date,
    fim: Date,
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Horario',horario);