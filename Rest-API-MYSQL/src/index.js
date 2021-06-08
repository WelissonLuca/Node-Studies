const express = require("express");
const consign = require('consign')
const routes = require("./routes")

const app = express();


app.use('/',routes);
app.listen(3000, () => console.log("server listening"));


