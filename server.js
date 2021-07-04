const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");

//Setting these variables for future use of routes
const apiRoutes = require("./routes/htmlRoutes/apiRoutes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

//Include Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//app.use routes will go here

//Make server listen
app.listen(PORT, () => {
  console.log("API server is now on port ${PORT}!");
});
