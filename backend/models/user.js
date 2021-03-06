'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    googleId: DataTypes.STRING,
    googleEmail: DataTypes.STRING,
    googleName: DataTypes.STRING,
    googlePicture: DataTypes.TEXT,
    facebookId: DataTypes.STRING,
    facebookName: DataTypes.STRING,
    facebookEmail: DataTypes.STRING,
    facebookPicture: DataTypes.TEXT,
    stockPicks: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
