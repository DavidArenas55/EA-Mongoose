"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarCoche = guardarCoche;
exports.obtenerCochePorId = obtenerCochePorId;
exports.listarCoches = listarCoches;
exports.editarCoche = editarCoche;
exports.eliminarCoche = eliminarCoche;
exports.contarCochesPorMarca = contarCochesPorMarca;
exports.guardarConductor = guardarConductor;
exports.obtenerConductorConCoches = obtenerConductorConCoches;
var coches_js_1 = require("./coches.js");
var conductor_js_1 = require("./conductor.js");
// Añadir un coche en la base de datos
function guardarCoche(coche) {
    return __awaiter(this, void 0, void 0, function () {
        var newCoche, cocheGuardado, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newCoche = new coches_js_1.cocheModel(coche);
                    return [4 /*yield*/, newCoche.save()];
                case 1:
                    cocheGuardado = _a.sent();
                    console.log("Coche guardado:", cocheGuardado);
                    return [2 /*return*/, cocheGuardado];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error al guardar el coche:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 📌 Obtener un coche por ID
function obtenerCochePorId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var coche, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, coches_js_1.cocheModel.findById(id)];
                case 1:
                    coche = _a.sent();
                    if (!coche) {
                        console.log("Coche no encontrado");
                        return [2 /*return*/, null];
                    }
                    console.log("Coche encontrado:", coche);
                    return [2 /*return*/, coche];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error al obtener el coche:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 📌 Listar todos los coches
function listarCoches() {
    return __awaiter(this, void 0, void 0, function () {
        var coches, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, coches_js_1.cocheModel.find()];
                case 1:
                    coches = _a.sent();
                    console.log("Lista de coches:", coches);
                    return [2 /*return*/, coches];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error al listar los coches:", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 📌 Editar un coche por ID
function editarCoche(id, datosActualizados) {
    return __awaiter(this, void 0, void 0, function () {
        var cocheActualizado, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, coches_js_1.cocheModel.findByIdAndUpdate(id, datosActualizados, { new: true })];
                case 1:
                    cocheActualizado = _a.sent();
                    if (!cocheActualizado) {
                        console.log("Coche no encontrado");
                        return [2 /*return*/, null];
                    }
                    console.log("Coche actualizado:", cocheActualizado);
                    return [2 /*return*/, cocheActualizado];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error al actualizar el coche:", error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 📌 Eliminar un coche por ID
function eliminarCoche(id) {
    return __awaiter(this, void 0, void 0, function () {
        var cocheEliminado, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, coches_js_1.cocheModel.findByIdAndDelete(id)];
                case 1:
                    cocheEliminado = _a.sent();
                    if (!cocheEliminado) {
                        console.log("Coche no encontrado");
                        return [2 /*return*/, null];
                    }
                    console.log("Coche eliminado:", cocheEliminado);
                    return [2 /*return*/, cocheEliminado];
                case 2:
                    error_5 = _a.sent();
                    console.error("Error al eliminar el coche:", error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Función que usa el aggregation pipeline para contar coches por marca
function contarCochesPorMarca() {
    return __awaiter(this, void 0, void 0, function () {
        var resultado, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, coches_js_1.cocheModel.aggregate([
                            { $group: { _id: "$marca", total: { $sum: 1 } } },
                            { $sort: { total: -1 } }
                        ])];
                case 1:
                    resultado = _a.sent();
                    console.log("Número de coches por marca:", resultado);
                    return [2 /*return*/, resultado];
                case 2:
                    error_6 = _a.sent();
                    console.error("Error al contar coches:", error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Función para guardar un conductor
function guardarConductor(conductor) {
    return __awaiter(this, void 0, void 0, function () {
        var newConductor, conductorGuardado, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newConductor = new conductor_js_1.conductorModel(conductor);
                    return [4 /*yield*/, newConductor.save()];
                case 1:
                    conductorGuardado = _a.sent();
                    console.log("Conductor guardado:", conductorGuardado);
                    return [2 /*return*/, conductorGuardado];
                case 2:
                    error_7 = _a.sent();
                    console.error("Error al guardar el conductor:", error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Función para obtener un conductor con sus coches utilizando populate
function obtenerConductorConCoches(conductorId) {
    return __awaiter(this, void 0, void 0, function () {
        var conductor, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, conductor_js_1.conductorModel.findById(conductorId)
                            .populate('coches')];
                case 1:
                    conductor = _a.sent();
                    console.log("Conductor con coches:", conductor);
                    return [2 /*return*/, conductor];
                case 2:
                    error_8 = _a.sent();
                    console.error("Error al obtener el conductor:", error_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
