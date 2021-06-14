const { DataTypes } = require("sequelize");
const Model = require("./BaseModel");

class Providers extends Model {
	static init(sequelize) {
		super.init(
			{
				company: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				category: {
					type: DataTypes.ENUM("ração", "brinquedos"),
					allowNull: false,
				},
			},
			{
				sequelize,
				underscored: true,
				tableName: "providers",
				version: true
			}
		);
	}
}

module.exports = Providers;
