'use strict';

describe('BowlingGame', function(){
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it("returns strike is 10 pins knocked down", function() {
    bowlingGame.bowl();
    expect(bowlingGame.play()).toEqual("Mmmm nice bowl!");
  });

});
