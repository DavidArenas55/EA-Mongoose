import mongoose from 'mongoose';
import { eliminarCoche, guardarCoche } from './operaciones.js';
import { obtenerCochePorId } from './operaciones.js';
import { listarCoches } from './operaciones.js';
import { editarCoche } from './operaciones.js';
import { contarCochesPorMarca } from './operaciones.js';
import { guardarConductor } from './operaciones.js';
import { obtenerConductorConCoches } from './operaciones.js';


async function main(params) {
    try {
        mongoose.set('strictQuery', true); // Mantiene el comportamiento actual
        await mongoose.connect('mongodb+srv://David:Claudia1309@cluster0.yylqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            .then(() => console.log('Conectado a MongoDB'))
            .catch(err => console.error('Error al conectar:', err));
        

    } catch (error) {
        console.error("Error al conectarse:", error);
    }
    const coche1 = {
        "marca": 'Seat',
        "matricula": '1234ABC',
        "color": 'rojo',
        "precio": 10000
    };
    const coche2 = {
        "marca": 'Ford',
        "matricula": '5678DEF',
        "color": 'azul',
        "precio": 20000
    };
    const coche3 = {
        "marca": 'Renault',
        "matricula": '9876GHI',
        "color": 'verde',
        "precio": 30000
    };


    //Guardo los 3 coches en la base de datos
    const coche4 = await guardarCoche(coche1);
    const coche5 = await guardarCoche(coche2);
    await guardarCoche(coche3);

    await obtenerCochePorId(coche4._id);
    await listarCoches();
    await editarCoche(coche4._id, { color: 'negro' });
    await eliminarCoche(coche5._id);
    await contarCochesPorMarca();

    // Crear conductor y asociar los coches
    const conductor1 = await guardarConductor({
        nombre: 'David',
        edad: 25,
        coches: [coche4._id]  // Usamos los ObjectIds de los coches
    });

    // Obtener conductor con los coches enlazados
    await obtenerConductorConCoches(conductor1._id);

    await mongoose.disconnect();
    console.log("Desconectado de MongoDB");

}
main();