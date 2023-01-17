const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

// Intancia de express
const app = express();

const PORT = 8000;

//Probar conexion a db
db.authenticate()
  .then(() => console.log("autenticación exitosa"))
  .catch(err => console.log(error));


initModels();


db.sync()
.then(()=> console.log("Base de datos sincronizada"))
.catch((error) => console.log(error))


app.get('/', (req, res) =>{
    res.status(200).json({message: "Bienvenido al servidor"});
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
