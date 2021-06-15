const { app } = require("./config/server");
const AppError = require("./errors/customErrors");
const router = require("./routes");

app.use(router);

app.use((err, req, res, next) => {
	if (err instanceof AppError)
		return res.status(err.status).json({
			messages: err.message,
			status: err.status,
		});
	return res.status(500).json({
		status: "error",
		message: `Internal server error - ${err.message}`,
	});
});

app.listen(3000, () => console.log("server is running"));
