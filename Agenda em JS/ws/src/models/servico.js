import mongoose, { Schema } from "mongoose";

const servico = new Schema({
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    status: {type: String, required: true,enum: ['A','I','E'], default: 'A'},
    titulo: String,
    preco: Number,
    duracao: Number,
    comissao: Number,
    recorrencia: Number,
    descricao: String,
    dataCadastro:{ type: Date, default: Date.now}
});


module.exports = mongoose.model('Servico',servico);
