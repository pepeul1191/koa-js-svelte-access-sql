// configs/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite', // Cambia esto si usas otra base de datos
  storage: './db/app.db', // Ruta a tu archivo de base de datos
});

export default sequelize;