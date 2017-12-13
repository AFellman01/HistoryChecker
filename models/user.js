var bcrypt = require("bcrypt-nodejs");
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
    	allowNull: false
    	// len:[1]
    }

  });
  Admin.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }
      return Admin;
}