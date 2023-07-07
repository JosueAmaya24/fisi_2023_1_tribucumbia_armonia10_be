
const express = require("express");
const { config } = require("./config/conf");
const userApi = require("./routes/userRoutes");
const hotelApi = require("./routes/hotelRoutes");
const habitacionApi = require("./routes/habitacionRoutes");
const reservaApi = require("./routes/reservaRoutes");

const app = express();

//Middleware
app.use(express.json());

//Routes
userApi(app);
hotelApi(app);
habitacionApi(app);
reservaApi(app);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});
