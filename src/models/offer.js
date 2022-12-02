import Mongoose from 'mongoose';
const { Schema, model} = Mongoose;
const OfferSchema = new Schema({
  pitch_id: { type: String, required: true },
  investor:{type: String, required: true},
  amount:{type: Number, required: true},
  equity:{type: Number, required: true},
  comment:{type: String, required: true}
})
const Offer= model('Offer', OfferSchema);
export default Offer;