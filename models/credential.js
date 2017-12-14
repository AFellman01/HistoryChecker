module.exports = function (sequelize, DataTypes) {
	var Credential = sequelize.define("Credential", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
        },

    Credo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
}
});
      return Credential;
}
