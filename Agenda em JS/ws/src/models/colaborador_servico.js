import mongoose, { Schema } from "mongoose";

const colaboradorServico = new Schema({
    colaboradorId: {type: mongoose.Types.ObjectId, ref: 'Colaborador'},
    servicoId: {type: mongoose.Types.ObjectId, ref: 'Servico'},
    status: String,
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Colaborador_Servico',colaboradorServico);