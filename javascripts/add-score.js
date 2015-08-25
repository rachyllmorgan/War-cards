define(function(require) {

  var score1 = 0;
  var score2 = 0;

  return {
    
    playerOneScore: function() {
      score1++;
      console.log('player 1:',score1);
    },

    getScoreOne: function() {
      return score1;
    },

    playerTwoScore: function() {
      score2++;
      console.log('player 2:',score2);
    },

    getScoreTwo: function() {
      return score2;
    },
    
    draw: function() {
      score1 = score1;
      score2 = score2;
      console.log("draw");
    },

    resetScore: function() {
      score1 = 0;
      score2 = 0;
    }
  };
});