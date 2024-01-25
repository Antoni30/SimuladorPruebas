import mongoose from "mongoose";

const Cuestionario = new mongoose.Schema({
    id_profesor: {
        type:String,
        require:true,
        trim:true
    },
    pregunta : {
        type:String,
        require:true,
        trim:true
    },
    respuesta:{
        type:String,
        require:true,
        trim:true
    }
})

export default mongoose.model('Custionario', Cuestionario);