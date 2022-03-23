const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_line', {
    timeline_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    timeline_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'time_line',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "time_line_pkey",
        unique: true,
        fields: [
          { name: "timeline_name" },
        ]
      },
    ]
  });
};
