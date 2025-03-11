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
var mongoose_1 = require("mongoose");
var operaciones_js_1 = require("./operaciones.js");
var operaciones_js_2 = require("./operaciones.js");
var operaciones_js_3 = require("./operaciones.js");
var operaciones_js_4 = require("./operaciones.js");
var operaciones_js_5 = require("./operaciones.js");
var operaciones_js_6 = require("./operaciones.js");
var operaciones_js_7 = require("./operaciones.js");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, coche1, coche2, coche3, coche4, coche5, conductor1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    mongoose_1.default.set('strictQuery', true); // Mantiene el comportamiento actual
                    return [4 /*yield*/, mongoose_1.default.connect('mongodb+srv://David:Claudia1309@cluster0.yylqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
                            .then(function () { return console.log('Conectado a MongoDB'); })
                            .catch(function (err) { return console.error('Error al conectar:', err); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error al conectarse:", error_1);
                    return [3 /*break*/, 3];
                case 3:
                    coche1 = {
                        "marca": 'Seat',
                        "matricula": '1234ABC',
                        "color": 'rojo',
                        "precio": 10000
                    };
                    coche2 = {
                        "marca": 'Ford',
                        "matricula": '5678DEF',
                        "color": 'azul',
                        "precio": 20000
                    };
                    coche3 = {
                        "marca": 'Renault',
                        "matricula": '9876GHI',
                        "color": 'verde',
                        "precio": 30000
                    };
                    return [4 /*yield*/, (0, operaciones_js_1.guardarCoche)(coche1)];
                case 4:
                    coche4 = _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_1.guardarCoche)(coche2)];
                case 5:
                    coche5 = _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_1.guardarCoche)(coche3)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_2.obtenerCochePorId)(coche4._id)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_3.listarCoches)()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_4.editarCoche)(coche4._id, { color: 'negro' })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_1.eliminarCoche)(coche5._id)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_5.contarCochesPorMarca)()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, (0, operaciones_js_6.guardarConductor)({
                            nombre: 'David',
                            edad: 25,
                            coches: [coche4._id] // Usamos los ObjectIds de los coches
                        })];
                case 12:
                    conductor1 = _a.sent();
                    // Obtener conductor con los coches enlazados
                    return [4 /*yield*/, (0, operaciones_js_7.obtenerConductorConCoches)(conductor1)];
                case 13:
                    // Obtener conductor con los coches enlazados
                    _a.sent();
                    return [4 /*yield*/, mongoose_1.default.disconnect()];
                case 14:
                    _a.sent();
                    console.log("Desconectado de MongoDB");
                    return [2 /*return*/];
            }
        });
    });
}
main();
