const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const fs = require("fs");

//Setting these variables for future use of routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Include Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//app.use routes will go here
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Make server listen
app.listen(PORT, () => {
  console.log("API server is now on port ${PORT}!");
});
