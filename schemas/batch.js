const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batch', {
    batch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    batch_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "batch_batch_name_key"
    },
    batch_technology: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    batch_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    batch_duration: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_inst_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instructor',
        key: 'inst_id'
      }
    },
    batch_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'batch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "batch_batch_name_key",
        unique: true,
        fields: [
          { name: "batch_name" },
        ]
      },
      {
        name: "batch_pkey",
        unique: true,
        fields: [
          { name: "batch_id" },
        ]
      },
    ]
  });
};
