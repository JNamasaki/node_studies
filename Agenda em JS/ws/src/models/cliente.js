import mongoose, { Schema } from "mongoose";

const cliente = new Schema({
    nome: {type:String, required: [true, "Nome é obrigatório"]},
    cpfCnpj: {type:String, required: [true, "CPF/CNPJ é obrigatório"]},
    email:{type:String, required: [true, "Email é obrigatório"]},
    senha: {type:String, required: [true, "Senha é obrigatório"]},
    dataNascimento: Date,
    telefone: String,
    sexo: String,
    status:{type: String, default:'ativo'},
    foto: String,
    documento:{
        tipo: {type:String, required: [true, "Senha é obrigatório"],enum: ['CPF','CNPJ']},
        numero: String
    },
    endereco: {
        pais: String,
        uf: String,
        cidade: String,
        numero: Number,
        cep: String
    },
    dataCadastro:{ type: Date, default: Date.now},
   
});


module.exports = mongoose.model('Cliente',cliente);