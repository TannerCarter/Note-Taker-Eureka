const express = require("express");
const app = express();

//Make server listen
app.listen(3001, () => {
  console.log(`API server is active on port 3001!`);
});
