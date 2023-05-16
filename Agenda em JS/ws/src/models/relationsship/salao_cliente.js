import mongoose, { Schema } from "mongoose";

const salaoCliente = new Schema({
    clienteId: {type: mongoose.Types.ObjectId,required:true, ref: 'Cliente'},
    salaoId: {type: mongoose.Types.ObjectId,  required:true, ref: 'Salao'},
    status:{ type:String, required:true},
    dataCadastro:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('SalaoCliente',salaoCliente);