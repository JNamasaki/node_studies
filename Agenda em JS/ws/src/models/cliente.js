import mongoose, { Schema } from "mongoose";

const cliente = new Schema({
    nome: {type:String, require: [true, "Nome é obrigatório"]},
    cpfCnpj: {type:String, require: [true, "CPF/CNPJ é obrigatório"]},
    email:{type:String, require: [true, "Email é obrigatório"]},
    senha: {type:String, require: [true, "Senha é obrigatório"]},
    dataNascimento: Date,
    telefone: String,
    sexo: String,
    status:{type: String, default:'ativo'},
    documento:{
        tipo: String,
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