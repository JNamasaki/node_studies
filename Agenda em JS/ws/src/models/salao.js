import mongoose, { Schema } from "mongoose";

const salao = new Schema({
    nome: {type:String, require: [true, "Nome é obrigatório"]},
    foto: String,
    capa: String,
    email:{type:String, require: [true, "Email é obrigatório"]},
    senha: {type:String, require: [true, "Senha é obrigatório"]},
    telefone: String,
    endereco: {
        pais: String,
        uf: String,
        cidade: String,
        numero: Number,
        cep: String
    },
    geo: {
        tipo: String,
        coordenates: Array
    },
    dataCadastro:{ type: Date, default: Date.now}
});

salao.index({geo: '2dsphere'});
module.exports = mongoose.model('Salao',salao);
