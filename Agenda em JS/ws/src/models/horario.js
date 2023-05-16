import mongoose, { Schema } from "mongoose";

const horario = new Schema({
    colaboradorId: {type: mongoose.Types.ObjectId, ref: 'Colaborador'},
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    servicoId:{type: mongoose.Types.ObjectId, ref: 'Servico'},
    dias: Number,
    inicio: Date,
    fim: Date,
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Horario',horario);