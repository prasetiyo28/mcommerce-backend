/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'migration': {
      type: DataTypes.STRING(191),
      allowNull: false,
      comment: "null"
    },
    'batch': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'migrations'
  });
};
