const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('placement', {
    place_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    place_contract_no: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "placement_place_contract_no_key"
    },
    place_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    place_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    place_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    place_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    place_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    place_client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'client_id'
      }
    }
  }, {
    sequelize,
    tableName: 'placement',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "placement_pkey",
        unique: true,
        fields: [
          { name: "place_id" },
        ]
      },
      {
        name: "placement_place_contract_no_key",
        unique: true,
        fields: [
          { name: "place_contract_no" },
        ]
      },
    ]
  });
};
