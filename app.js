const express = require("express");
const router = require("./src/routes/api")
const app = new express();

// Importing middlewares
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const xss = require("xss-clean");


// Implement all security middlewares
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);



// Route
app.use("/api/v1", router);

// Undefined route
app.use("*", (req, res)=>{
    res.status(404).json({
        status: 'Failed',
        data: "Not found"
    })
})


module.exports= app;