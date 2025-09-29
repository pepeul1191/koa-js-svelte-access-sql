// models/System.js
import { DataTypes } from 'sequelize';
import sequelize from '../../configs/database.js'; // Asegúrate de importar tu instancia de Sequelize

const System = sequelize.define('System', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  repository: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'systems',
  timestamps: false, // Si no estás usando los timestamps automáticos de Sequelize
});

// Actualizar el campo 'updated' automáticamente antes de cada actualización
System.beforeUpdate((system) => {
  system.updated = new Date();
});

export default System;
