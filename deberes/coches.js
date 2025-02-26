import { Schema, model } from 'mongoose';
// 2. Create a Schema corresponding to the document in MongoDB.
const cocheSchema = new Schema({
    marca: { type: String, required: true },
    matricula: { type: String, required: true },
    color: { type: String, required: true },
    precio: { type: Number, default: 0 },
});
// 3. Create a Model.
export const cocheModel = model('Coche', cocheSchema);
