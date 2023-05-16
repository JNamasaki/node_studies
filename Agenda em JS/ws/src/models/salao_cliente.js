import mongoose, { Schema } from "mongoose";

const salaoCliente = new Schema({
    clienteId: {type: mongoose.Types.ObjectId, ref: 'Cliente'},
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    status: String,
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Salao_Cliente',salaoCliente);