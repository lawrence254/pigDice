function Player(name) {
  this.name = name;
  this.score = 0;
  this.total = 0;
}

Player.prototype.roll = function(roll) {
  this.total = this.total + roll;
  return this.total;
}
function gameOver(player){
  alert("Game Over!"+player);
}
$(document).ready(function() {
  var rollCount = [];
  var players = [];
  var player1 = new Player(name);
  var player2 = new Player(name);
  $('#rollDie1').click(function(event){
    event.preventDefault();
    var rollNumber = Math.floor(Math.random() * 6) + 1;
    if (rollNumber === 1) {
      alert("Sorry...You rolled a one my niggah....try your luck next time");
      player1.roll(0);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }else {
      rollCount.push(rollNumber);
      player1.roll(rollNumber);
      if (player1.total >= 100) {
        var player = "PLayer 1";
        gameOver(player);
      }
      console.log("Player 1 Total is:"+player1.total);
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
      console.log("Player 2 Total is:"+player2.total);
      console.log(rollCount);
    }

  });
  $('#hold').click(function (event) {
    event.preventDefault();
    if ($('#rollDie1').is(':visible')) {
      alert("You chose to hold. Your score is: "+player1.total);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }else {
      alert("You chose to hold. Your score is: "+player2.total);
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
    }
  });

});
