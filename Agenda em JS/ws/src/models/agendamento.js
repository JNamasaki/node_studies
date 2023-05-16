import mongoose, { Schema } from "mongoose";

const agendamento = new Schema({
    colaboradorId: {type: mongoose.Types.ObjectId, ref: 'Colaborador'},
    clienteId:{type: mongoose.Types.ObjectId, ref: 'Cliente'},
    salaoId: {type: mongoose.Types.ObjectId, ref: 'Salao'},
    servicoId:{type: mongoose.Types.ObjectId, ref: 'Servico'},
    horarioId: {type: mongoose.Types.ObjectId, ref: 'Horario'},
    data: Date,
    comissao: Number,
    valor: Number,
    transactionId: String,
    dataCadastro:{ type: Date, default: Date.now},
});

mongoose.exports = mongoose.model("Agendamento", agendamento);