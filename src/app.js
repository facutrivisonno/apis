const express = require("express");
const app = express();
const methodOverride = require('method-override');

const apiAlumnosRouter = require("./routes/api/apiAlumnosRouter");

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({extended: false}));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use(express.static("public"));

app.use(express.json());

app.use("/api", apiAlumnosRouter)

//Activando el servidor desde express
app.listen(3010, ()=>{
    console.log("Servidor corriendo en el puerto 3010")
});