var friends = require ("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        res.json(friends);
      }); 

     app.post('/api/friends', function (req, res) {
        
        var bestMatch = {
            name:"",
            photo:"",
            friendsDifference:1000
        };
        console.log(req.body);
        
        // Here we take the result of the servay and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);
        var totalDifference = 0;

        // the loop through the friends in the DB
        
        for (var i = 0; i < friends.length; i++) {
          console.log(friends[i]);
          totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                     if (totalDifference <= bestMatch.friendsDifference){
                        bestMatch.name = friends[i].name;
                        bestMatch.photo = friends[i].photo;
                        bestMatch.friendDifference = totalDifference;
                        } 
                     }
                    }
                    friends.push(userData);
                    console.log("New user added");
                    console.log(userData);
                    res.json(bestMatch);
      }); 
}

