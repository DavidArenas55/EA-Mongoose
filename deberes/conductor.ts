import mongoose from 'mongoose';
import { Coche } from './coches';

// 1. Define la interfaz Coche
export interface Conductor extends Document {
    nombre: string;
    edad: number;
    coches: mongoose.Types.ObjectId[];
}

// Definir el esquema de un conductor
const conductorSchema = new mongoose.Schema<Conductor>({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    coches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coche' }]  // Enlace a la colección Coche
});

// Crear el modelo de conductor basado en el esquema
export const conductorModel = mongoose.model('Conductor', conductorSchema);
