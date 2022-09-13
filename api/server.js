const express = require('express');
const app = express(); 
const db = require("./config/db");
const models = require("./models");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);


app.get("/",function(req,res) {
    res.send("Hola Mundo!")
});

db.sync({force : true})
.then(function(){
    app.listen(3001, () => {
        console.log('Servidor corriendo en el puerto 3001')
})
}); 
