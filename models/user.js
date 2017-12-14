module.exports = function (sequelize, DataTypes) {
	var Author = sequelize.define("Author", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
        },

    Author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
}
});
      return Author;
}
