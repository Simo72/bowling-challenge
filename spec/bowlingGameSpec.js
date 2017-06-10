'use strict';

describe('BowlingGame', function(){
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

it("bowls a ball towards the pins", function() {
  bowlingGame.bowl();
  expect(bowlingGame.score).toEqual(7);
});
});
