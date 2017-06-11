function BowlingGame() {
  this.score = 0;
  this.pins = 10;

// BowlingGame.prototype.getCurrentScore = function() {
//   return this.score;
// };

BowlingGame.prototype.bowl_one = function () {
  var scoreOne =  Math.floor(Math.random() * 10) + 1;
  (this.score += scoreOne);
};

BowlingGame.prototype.bowl_two = function () {
  (this.score += 2)
};

// BowlingGame.prototype.frame = function () {
//
// }
// for(i = 0; i < 6; i++) { thermostat.up(); };
}
