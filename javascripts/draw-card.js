define(function(require) {
  var $ = require("jquery");
  var getCard = require("get-card");
  var startGame = require("start-game");
  var endGame = require("end-game");
  var winGame = require("winner");
  var addScore = require("add-score");


  var card1;
  var card2;

  $("#drawCards").click(function() {
      console.log("draw card click");

    var player1 = startGame.getDeckOne();
    var player2 = startGame.getDeckTwo();

    getCard(player1).then(function(data) {

      // establish value of card drawn - player 1
      card1 = data.cards[0].value;
        console.log("card1", card1);

      // card image from API - player 1
      var cardImage1 = data.cards[0].image;
        console.log(cardImage1);

      $("#playOne").html("<img src='" + cardImage1 + "' height=200>");


    getCard(player2).then(function(data2) {
      console.log(data2);

      // establish value of card drawn - player 2
      card2 = data2.cards[0].value;
        console.log("card2", card2);

      // card image from API - player 2
      var cardImage2 = data2.cards[0].image;
      console.log(cardImage2);

      $("#playTwo").html("<img src='" + cardImage2 + "' height=200>");

      winGame(card1,card2);

      });

    });

  });

});