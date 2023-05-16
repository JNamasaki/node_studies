import mongoose, { Schema } from "mongoose";

const agendamento = new Schema({
    colaboradorId: {type: mongoose.Types.ObjectId, ref: 'Colaborador'},
    clienteId:{type: mongoose.Types.ObjectId, required:true,  ref: 'Cliente'},
    salaoId: {type: mongoose.Types.ObjectId,  required:true, ref: 'Salao'},
    servicoId:{type: mongoose.Types.ObjectId, required:true,  ref: 'Servico'},
    horarioId: {type: mongoose.Types.ObjectId, required:true,  ref: 'Horario'},
    data: { type: Date,required:true},
    comissao:{ type: Number,required:true} ,
    valor: { type: Number,required:true},
    transactionId: { type: String,required:true},
    dataCadastro:{ type: Date, default: Date.now},
});

mongoose.exports = mongoose.model("Agendamento", agendamento);