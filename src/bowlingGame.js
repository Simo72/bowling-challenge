function BowlingGame() {

  this.score = 0;
  this.currentBowl = 0;
  this.bowls = [];
  var scorecard = {};

  BowlingGame.prototype.bowl = function (pins) {
    var scoreOne =  Math.floor(Math.random() * 10) + 1;
      this.bowls.push(scoreOne);
      this.score =+ scoreOne
      this.currentBowl++
    console.log(this.bowls);
    console.log(this.currentBowl)
    console.log(this.score)
  };




BowlingGame.prototype.play = function() {
  if (this.score == 10)
    return "Mmmm nice bowl!"
  else {
    return this.score
  }
}
};
