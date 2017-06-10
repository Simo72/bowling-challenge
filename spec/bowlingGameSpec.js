'use strict';

describe('BowlingGame', function(){
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it("bowls a ball towards the pins", function() {
    bowlingGame.bowl_one();
    expect(bowlingGame.score).toEqual(7);
  });

  it("Bowls 2 balls", function () {
    bowlingGame.bowl_two();
    expect(bowlingGame.score).toEqual(2);
  });

});
