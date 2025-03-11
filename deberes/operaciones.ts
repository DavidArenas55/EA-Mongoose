import { cocheModel } from './coches.js';
import { conductorModel } from './conductor.js';

// Añadir un coche en la base de datos
export async function guardarCoche(coche) {
    try {
        const newCoche = new cocheModel(coche);
        const cocheGuardado = await newCoche.save();
        console.log("Coche guardado:", cocheGuardado);
        return cocheGuardado;
    } catch (error) {
        console.error("Error al guardar el coche:", error);
    }
}

// 📌 Obtener un coche por ID
export async function obtenerCochePorId(id) {
    try {
        const coche = await cocheModel.findById(id);
        if (!coche) {
            console.log("Coche no encontrado");
            return null;
        }
        console.log("Coche encontrado:", coche);
        return coche;
    } catch (error) {
        console.error("Error al obtener el coche:", error);
    }
}

// 📌 Listar todos los coches
export async function listarCoches() {
    try {
        const coches = await cocheModel.find();
        console.log("Lista de coches:", coches);
        return coches;
    } catch (error) {
        console.error("Error al listar los coches:", error);
    }
}

// 📌 Editar un coche por ID
export async function editarCoche(id, datosActualizados) {
    try {
        const cocheActualizado = await cocheModel.findByIdAndUpdate(id, datosActualizados, { new: true });
        if (!cocheActualizado) {
            console.log("Coche no encontrado");
            return null;
        }
        console.log("Coche actualizado:", cocheActualizado);
        return cocheActualizado;
    } catch (error) {
        console.error("Error al actualizar el coche:", error);
    }
}

// 📌 Eliminar un coche por ID
export async function eliminarCoche(id) {
    try {
        const cocheEliminado = await cocheModel.findByIdAndDelete(id);
        if (!cocheEliminado) {
            console.log("Coche no encontrado");
            return null;
        }
        console.log("Coche eliminado:", cocheEliminado);
        return cocheEliminado;
    } catch (error) {
        console.error("Error al eliminar el coche:", error);
    }
}

// Función que usa el aggregation pipeline para contar coches por marca
export async function contarCochesPorMarca() {
    try {
        const resultado = await cocheModel.aggregate([
            { $group: { _id: "$marca", total: { $sum: 1 } } },
            { $sort: { total: -1 } }
        ]);
        console.log("Número de coches por marca:", resultado);
        return resultado;
    } catch (error) {
        console.error("Error al contar coches:", error);
    }
}

// Función para guardar un conductor
export async function guardarConductor(conductor) {
    try {
        const newConductor = new conductorModel(conductor);
        const conductorGuardado = await newConductor.save();
        console.log("Conductor guardado:", conductorGuardado);
        return conductorGuardado;
    } catch (error) {
        console.error("Error al guardar el conductor:", error);
    }
}

// Función para obtener un conductor con sus coches utilizando populate
export async function obtenerConductorConCoches(conductorId) {
    try {
        const conductor = await conductorModel.findById(conductorId)
            .populate('coches');  // Esto obtiene los coches asociados al conductor
        console.log("Conductor con coches:", conductor);
        return conductor;
    } catch (error) {
        console.error("Error al obtener el conductor:", error);
    }
}