
import mongoose, { Schema } from "mongoose"

const arquivoSchema = new Schema({
    referenciaId:{
        type: Schema.Types.ObjectId
    },
    model: {
        type: String,
        required:true,
        enum:['Servico','Salao']
    },
    caminho:{
        type: String,
        required: true
    },
    dataCadastro:{ type: Date, default: Date.now}
});

const arquivo = mongoose.model('Arquivo', arquivoSchema);
export default arquivo;