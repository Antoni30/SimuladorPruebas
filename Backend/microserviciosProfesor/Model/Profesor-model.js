import mongoose from "mongoose";

const Profesor = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    }
})

export default mongoose.model('Profesor',Profesor);