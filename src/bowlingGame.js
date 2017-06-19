function BowlingGame() {

  this.scoreOne = 0;
  this.scoreTwo = 0;
  this.currentBowl = 0;
  this.bowls = [];
  var scorecard = {};

  BowlingGame.prototype.bowlFirst = function (pins) {
    var score =  Math.floor(Math.random() * 10) + 1;
      this.scoreOne =+ score

    console.log(this.scoreOne)
  };

  BowlingGame.prototype.bowlSecond = function (pins) {
    var score =  Math.floor(Math.random() * (10 - this.scoreOne)) + 1;
      this.scoreTwo =+ score

    console.log(this.scoreTwo)
  };

  BowlingGame.prototype.randomCalc = function() {

  }





};
