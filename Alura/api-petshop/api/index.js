const { app } = require("./config/server");
const router = require("./routes");



app.use(router);

app.listen(3000, () => console.log("server is running"));
