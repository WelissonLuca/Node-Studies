const config = {
	username: process.env.MYSQL_USERNAME || "admin",
	password: process.env.MYSQL_PASSWORD || "123",
	database: process.env.MYSQL_DATABASE || "ecommerce_gama",
	host: process.env.MYSQL_HOST || "localhost",
	port: process.env.MYSQL_PORT || "3306",
	dialect: process.env.MYSQL_DIALECT || "mysql",
	timezone: "-03:00",
	useUTC: false,
	define: {
		timestamps: true,
	},
};

module.exports = config;
