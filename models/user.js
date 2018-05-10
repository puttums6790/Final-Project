'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post,
    {foreignKey: "userID", onDelete: "cascade"});
    // associations can be defined here
  };
  return User;
};