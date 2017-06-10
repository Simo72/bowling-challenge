function BowlingGame() {
  this.pins = 10;
  this.score = 0
}

BowlingGame.prototype.bowl_one = function () {
  return (this.score =+ 7)
};

BowlingGame.prototype.bowl_two = function () {
  return (this.score =+ 2)
};

// BowlingGame.prototype.frame = function () {
//
// }
// for(i = 0; i < 6; i++) { thermostat.up(); };
