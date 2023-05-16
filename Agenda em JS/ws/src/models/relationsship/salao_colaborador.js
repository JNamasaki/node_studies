import mongoose, { Schema } from "mongoose";

const salaoColaborador = new Schema({
    colaboradorId: {type: mongoose.Types.ObjectId, ref: 'Colaborador'},
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    status: String,
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('SalaoColaborador',salaoColaborador);