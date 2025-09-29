// application/services/systems_service.js
import System from '../models/system.js'; // Importar el modelo

const getAllSystems = async () => {
  try {
    const systems = await System.findAll(); // Obtener todos los sistemas
    return { data: systems, message: 'Sistemas obtenidos con éxito', error: null, status: true };
  } catch (error) {
    return { data: null, message: 'Error al obtener los sistemas', error: error.message, status: false };
  }
};

const getSystemById = async (id) => {
  try {
    const system = await System.findByPk(id); // Obtener un sistema por su ID
    if (!system) {
      return { data: null, message: 'Sistema no encontrado', error: 'NotFound', status: false };
    }
    return { data: system, message: 'Sistema obtenido con éxito', error: null, status: true };
  } catch (error) {
    return { data: null, message: 'Error al obtener el sistema', error: error.message, status: false };
  }
};

export default {
  getAllSystems,
  getSystemById,
};
