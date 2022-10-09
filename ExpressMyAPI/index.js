const app    = require("./app");
const dotEnv = require('dotenv');
dotEnv.config({path: './config.env'});

app.listen(process.env.RUNNING_PORT, function () {
    console.log(process.env.RUNNING_PORT);
});