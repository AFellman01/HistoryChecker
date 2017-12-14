module.exports = function (sequelize, DataTypes) {
	var Blog = sequelize.define("Blog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
        },

    Author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
    	type: TIMESTAMP,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    	allowNull: false
    },
    updated_at {
      type: TIMESTAMP,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      allowNull: False,
    },
    Visible: {
      type:BOOLEAN,
      allowNull: false,
      defaultValue:0,
    }

      return POST;
}
