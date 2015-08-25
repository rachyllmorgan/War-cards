define(function(require) {
  var addScore = require("add-score");

  return function(remaining) {
    if (remaining === 0) {
 
      if (addScore.getScoreOne() > addScore.getScoreTwo()) {
        $("#results").html("Winner: Player One");

      } else if (addScore.getScoreOne() < addScore.getScoreTwo()) {
        $("#results").html("Winner: Player Two");

      } else {
        $("#results").html("It's a draw!");

      }
    }
  };
});