import mongoose from 'mongoose';
import Mongoose from 'mongoose';
const { Schema, model} = Mongoose;
const PitchSchema = new Schema({
    entrepreneur: { type: String, required: true, trim: true},
    pitchTitle: { type: String, required: true, trim: true },
    pitchIdea: { type: String},
    askAmount:{ type:Number, required: true},
    equity:{ type:Number, required: true},
    offers:{type:Array,default:undefined},
    createdAt: {type: Date,default: Date.now,select:false },
},
{ timestamp:true}
)
const Pitch = model('Pitch', PitchSchema);
export default Pitch;



