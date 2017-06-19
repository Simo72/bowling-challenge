$(document).ready(function() {
  var bowling = new BowlingGame();
  $('#score').text(bowling.score);
  $('#play').text(bowling.play());

  $('#bowl').on('click', function() {
    bowling.bowl();
    $('#play').text(bowling.play());
    $('#score').text(bowling.bowls);
  })

});
