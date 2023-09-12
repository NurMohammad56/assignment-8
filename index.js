const app = require("./app");
require('dotenv').config({path: "./config.env"})

app.listen(process.env.RUNNING_PORT, ()=>{
    console.log(`Running port is `+ process.env.RUNNING_PORT)
})