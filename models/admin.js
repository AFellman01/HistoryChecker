var bcrypt = require("bcrypt-nodejs");
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
	var Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
        },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
    	type: DataTypes.STRING,
    	allowNull:false,
    	// len: [1]

    },
    DateOfBirth: {
    	type: DataTypes.STRING,
    	allowNull: true
    	// len:[1]
    },

    createdAt: {
      type: Sequelize.DATE,
      allownull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },

    updatedAt: {
      type: Sequelize.DATE,
      allownull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }

  });
  Admin.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }
      return Admin;
}
