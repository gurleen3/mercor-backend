const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import route from "./router/router.js";

const app = express();
const route=require('./routes/route.js')
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

// app.use("/por",route);

const PORT= process.env.PORT || 5000;
app.use('/user',route);
// app.use('/ask', require("./routes/openAiRoutes.js"))
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})