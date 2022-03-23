const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instructor', {
    inst_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inst_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    inst_bootcamp: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    inst_photo: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    inst_about: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inst_linkedin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inst_twitter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inst_blog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inst_youtube: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'instructor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "instructor_pkey",
        unique: true,
        fields: [
          { name: "inst_id" },
        ]
      },
    ]
  });
};
