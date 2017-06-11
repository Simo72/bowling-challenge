function BowlingGame() {
  this.score = 0;
  this.pins = 10;


BowlingGame.prototype.getCurrentScore = function() {
  return this.score;
};

BowlingGame.prototype.bowl_one = function () {
  (this.score += 7)
};

BowlingGame.prototype.bowl_two = function () {
  (this.score += 2)
};

// BowlingGame.prototype.frame = function () {
//
// }
// for(i = 0; i < 6; i++) { thermostat.up(); };
}
