import mongoose, { Schema } from "mongoose";

const agendamento = new Schema({
    colaboradorId: ObjectId,
    clienteId:ObjectId,
    salaoId: ObjectId,
    servico: ObjectId,
    horarioId: ObjectId,
    data: Date,
    comissao: Number,
    valor: Number,
    transactionId: String,
    dataCadastro:{ type: Date, default: Date.now},
});

mongoose.exports = mongoose.model("Agendamento", agendamento);