const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    client_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "client_client_name_key"
    },
    client_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_total_worker: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client_industry: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    client_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_city: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    client_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_client_name_key",
        unique: true,
        fields: [
          { name: "client_name" },
        ]
      },
      {
        name: "client_pkey",
        unique: true,
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
