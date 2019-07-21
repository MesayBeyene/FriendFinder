var path = require("path");

module.exports = function(app){

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
      }); 
      app.get("/friends", function(req, res) {
        // res.sendFile(path.join(__dirname + "/../data/friends.js"));
        res.json(friends)
       });
      app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
      })
}

