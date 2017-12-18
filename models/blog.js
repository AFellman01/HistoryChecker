var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var blog = sequelize.define("blog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Post: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    TrueOrFalse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    Visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });

  return blog;
}
