const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.get('/', function(req, res){
    res.send("Welcome to 7T2!");
 });
app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});