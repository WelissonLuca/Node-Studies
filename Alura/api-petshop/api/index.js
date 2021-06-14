const { app } = require("./config/server");
const router = require("./routes");

app.use(router)

