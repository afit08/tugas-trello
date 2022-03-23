const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curriculum_reviews', {
    cure_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cure_review: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    cure_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cure_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    cure_curr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curriculum',
        key: 'curr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'curriculum_reviews',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "curriculum_reviews_pkey",
        unique: true,
        fields: [
          { name: "cure_id" },
        ]
      },
    ]
  });
};
