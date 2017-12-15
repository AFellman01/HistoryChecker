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
    TrueOrFalse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_at: {
    	type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    	allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    Visible: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
	});

      return Blog;
}
