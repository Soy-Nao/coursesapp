const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.routes");
const categoryRoutes = require("./routes/categories.routes");
const courseRoutes = require("./routes/course.routes");
const videoRoutes = require("./routes/video.routes");
// Intancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

//Probar conexion a db
db.authenticate()
  .then(() => console.log("autenticación exitosa"))
   .catch((err) => console.log(err));

initModels();

db.sync({ alter: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" });
  });

 // Rutas
app.use( '/api/v1', userRoutes );
app.use( '/api/v1', courseRoutes );
app.use( '/api/v1', videoRoutes );
app.use( '/api/v1', categoryRoutes );

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
