'use strict';

describe('BowlingGame', function(){
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it("bowls first ball towards the pins", function() {
    bowlingGame.bowlFirst();
    expect(bowlingGame.scoreOne).toEqual(0);
  });

  it("bowls second ball towards the pins", function() {
    bowlingGame.bowlSecond();
    expect(bowlingGame.scoreTwo).toEqual(0);
  });

});
