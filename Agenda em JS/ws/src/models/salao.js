import mongoose, { Schema } from "mongoose";

const salaoSchema = new Schema({
    nome: {type:String, required: [true, "Nome é obrigatório"]},
    foto: String,
    capa: String,
    email:{type:String, required: [true, "Email é obrigatório"]},
    senha: {type:String, required: [true, "Senha é obrigatório"]},
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

salaoSchema.index({geo: '2dsphere'});
const salao = mongoose.model('Salao',salaoSchema);

export default salao