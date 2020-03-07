/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobileUserlogin', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true,
      field: 'id'
    },
    'email': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null",
      field: 'email'
    },
    'password': {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "null",
      field: 'password'
    },
    'token': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null",
      field: 'token'
    },
    'createdBy': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      field: 'created_by'
    },
    'createdDate': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null",
      field: 'created_date'
    },
    'updatedBy': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      field: 'updated_by'
    },
    'updatedDate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null",
      field: 'updated_date'
    },
  }, {
    tableName: 'mobile_userlogin',
    timestamps : false
  });
};
