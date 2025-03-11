import { Schema, model, Document } from 'mongoose';

// 1. Define la interfaz Coche
export interface Coche extends Document {
    marca: string;
    matricula: string;
    color: string;
    precio: number;
}

// 2. Create a Schema corresponding to the document in MongoDB.
const cocheSchema = new Schema<Coche>({
    marca: { type: String, required: true },
    matricula: { type: String, required: true },
    color: { type: String, required: true },
    precio: { type: Number, default: 0 },
});

// 3. Create a Model.
export const cocheModel = model<Coche>('Coche', cocheSchema);
