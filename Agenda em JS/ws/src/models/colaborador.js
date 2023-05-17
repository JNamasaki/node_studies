import mongoose, { Schema } from "mongoose";

const colaboradorSchema = new Schema({
    nome: {type:String, require: [true, "Nome é obrigatório"]},
    cpfCnpj: {type:String, require: [true, "CPF/CNPJ é obrigatório"]},
    foto: String,
    capa: String,
    email:{type:String, require: [true, "Email é obrigatório"]},
    senha: {type:String, require: [true, "Senha é obrigatório"]},
    dataNascimento: Date,
    telefone: String,
    sexo: String,
    status:{type: String, default:'ativo'},
    contaBancaria: {
        titular: String,
        cpfCnpj: String,
        banco: String,
        tipo: String,
        agencia: String,
        numero:String,
        div:String
    },
    recipientId: String,
    dataCadastro:{ type: Date, default: Date.now},
});


const colaborador = mongoose.model('Colaborador',colaboradorSchema);

export default colaborador;