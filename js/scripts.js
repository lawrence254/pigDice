function Player(name) {
  this.name = name;
  // this.score = 0;
  this.total = 0;
}

Player.prototype.roll = function(roll) {
  this.total = this.total + roll;
  return this.total;
}
function gameOver(player){
  alert("Game Over! "+ player +" Wins!!!!!");
}
$(document).ready(function() {
  var rollCount = [];
  var players = [];
  var player1 = {};
  var player2 = {};

  $('form#rollDice').submit(function (event) {
    event.preventDefault();
    var p1= $('input#player1').val()
    var p2= $('input#player2').val()

    player1 = new Player(p1);
     player2 = new Player(p2);

    console.log("Player 1 is: "+player1.name+" And Player 2 is: "+player2.name);
  });
  $('#rollDie1').click(function(event){
    event.preventDefault();
    var rollNumber = Math.floor(Math.random() * 6) + 1;
    if (rollNumber === 1) {
      // alert("Sorry...You rolled a one my niggah....try your luck next time");
      player1.roll(0);
      $('#player1Score').empty()
      $('#player1Score').append("You rolled a 1: "+player1.total);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }else {
      rollCount.push(rollNumber);
      player1.roll(rollNumber);
      if (player1.total >= 100) {
        var player = player1.name;
        gameOver(player);
      }
      $('#player1Score').empty();
      $('#player1Score').append("Your Total is: "+player1.total);
      // console.log(player1.name+" Total is:"+player1.total);
      console.log(rollCount);
    }
    console.log(rollNumber);
  });
  $('#rollDie2').click(function(event){
    event.preventDefault();
    var rollNumber = Math.floor(Math.random() * 6) + 1;
    if (rollNumber === 1) {
      alert("Sorry...You rolled a one my niggah....try your luck next time");
      player2.roll(0);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }else {
      rollCount.push(rollNumber);
      player2.roll(rollNumber);
      if (player1.total >= 100) {
        var player = player2.name;
        gameOver(player);
      }
      $('#player2Score').empty();
      $('#player2Score').append("Your Total is: "+player2.total);
      // console.log(player2.name+" Total is:"+player2.total);
      console.log(rollCount);
    }

  });
  $('#hold').click(function (event) {
    event.preventDefault();
    if ($('#rollDie1').is(':visible')) {
      $('#player1Score').empty();
      $('#player1Score').append("You chose to hold. Your score is: "+player1.total);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }else {
      $('#player2Score').empty();
      $('#player2Score').append("You chose to hold. Your score is: "+player2.total);
      // alert("You chose to hold. Your score is: "+player2.total);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }
  });

});
