"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cocheModel = void 0;
var mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document in MongoDB.
var cocheSchema = new mongoose_1.Schema({
    marca: { type: String, required: true },
    matricula: { type: String, required: true },
    color: { type: String, required: true },
    precio: { type: Number, default: 0 },
});
// 3. Create a Model.
exports.cocheModel = (0, mongoose_1.model)('Coche', cocheSchema);
