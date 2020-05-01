const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody try6!");
});
 
module.exports.app = app;
