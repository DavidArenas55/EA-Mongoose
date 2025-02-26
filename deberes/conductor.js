// conductor.js
import mongoose from 'mongoose';

// Definir el esquema de un conductor
const conductorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    coches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coche' }]  // Enlace a la colección Coche
});

// Crear el modelo de conductor basado en el esquema
export const conductorModel = mongoose.model('Conductor', conductorSchema);
