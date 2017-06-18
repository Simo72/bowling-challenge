$(document).ready(function() {
  var bowling = new BowlingGame();
  $('#score').text(bowling.score);

  $('#bowl').on('click', function() {
    bowling.bowl();
    $('#score').text(bowling.bowls);
  })

});
