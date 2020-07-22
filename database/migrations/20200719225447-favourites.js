'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('favourites', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      img_url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      full_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.STRING,
      },
  })
  },

  down: async (queryInterface) => {
    
    return queryInterface.dropTable('favourites');
  }
};
