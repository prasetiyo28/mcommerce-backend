/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    'id': {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'password': {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "null"
    },
    'api_token': {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "null"
    },
    'created_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updated_at': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },


  }, {
    tableName: 'users',
    timestamps: false,
  });
};
