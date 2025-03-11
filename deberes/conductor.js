"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conductorModel = void 0;
var mongoose_1 = require("mongoose");
// Definir el esquema de un conductor
var conductorSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    coches: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Coche' }] // Enlace a la colección Coche
});
// Crear el modelo de conductor basado en el esquema
exports.conductorModel = mongoose_1.default.model('Conductor', conductorSchema);
