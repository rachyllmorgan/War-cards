define(function(require) {
  var $ = require("jquery");
  var getDeck = require("get-deck");
  var addScore = require("add-score");

  var player1;
  var player2;


  $("#startGame").click(function() {

    // Get deck ID's for each player
    getDeck().then(function(data) {
      console.log(data); 
      player1 = data.deck_id;

    });

    getDeck().then(function(data) {
      console.log(data);
      player2 = data.deck_id;
    });
  });

  $("#playAgain").click(function() {

    // reset score and get new ID's
    addScore.resetScore();

    getDeck().then(function(data) {

      console.log(data);
      player1 = data.deck_id;
    });

    getDeck().then(function(data) {
      console.log(data);
      player2 = data.deck_id;
    });
  });

  return {
    getDeckOne: function() {
      return player1;
    },
    getDeckTwo: function() {
      return player2;
    }
  };
});