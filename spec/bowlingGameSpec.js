'use strict';

describe('BowlingGame', function(){
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it("bowls a ball towards the pins", function() {
    bowlingGame.bowlFirst();
    expect(bowlingGame.scoreOne).toEqual(0);
  });


});
