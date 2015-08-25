define(function(require) {
  var addScore = require("add-score");

  return function(card1, card2) {

    console.log('card one val:',card1);
    console.log('card two val:',card2);

    if (card1 > card2) {
      addScore.playerOneScore();
      
    } else if (card1 < card2) {
      addScore.playerTwoScore();

    }else if (card1 === card2) {
      addScore.draw();
    }
  };
});