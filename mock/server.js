var express = require("express")

var app = express();

var router = express.Router();

router.use("/vodafone",require('./vodafone'));

app.use("/api",router)

app.listen(3001)