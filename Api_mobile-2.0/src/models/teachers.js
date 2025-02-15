
import {model,Schema} from 'mongoose';
const teachersSchema=new Schema({
    teacher_number:{
        unique:true,
        require:true, 
        type: Number
    },

    name:String,
    lastname:String,
    Salary:Number, 
    carrer: String,
    Age:Number
},{
    versionKey:false, 
    timestamps:true,

});
export default model('teachers', teachersSchema);