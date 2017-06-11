$(document).ready(function() {
  var bowling = new BowlingGame();
  $('#score').text(bowling.score);

  $('#bowl_one').on('click', function() {
    bowling.bowl_one();
    $('#score').text(bowling.score);
  })

});
