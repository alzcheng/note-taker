const express = require("express");
const app = express();

// Set port to 5000
const PORT = process.env.PORT || 5000;

// Define routes for api and client
const apiRoutes = require("./routes/api-routes");
const clientRoutes = require("./routes/client-routes");

//Make sure that we can use the url and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define paths for api and client
app.use("/api", apiRoutes);
app.use("/", clientRoutes);

//Listen onto the port
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
