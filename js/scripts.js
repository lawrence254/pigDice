function Player(name) {
  this.name = name;
  this.score = 0;
  this.total = 0;
}

Player.prototype.roll = function(roll) {
  this.total = this.total + roll;
  return this.total;
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
    }else {
      rollCount.push(rollNumber);
      player1.roll(rollNumber);
      console.log("PLayer 1 Total is:"+player1.total);
      console.log(rollCount);
    }
    console.log(rollNumber);
  });
  $('#rollDie2').click(function(event){
    event.preventDefault();
    var rollNumber = Math.floor(Math.random() * 6) + 1;
    if (rollNumber === 1) {
      alert("Sorry...You rolled a one my niggah....try your luck next time");
    }else {
      rollCount.push(rollNumber);
      player2.roll(rollNumber);
      console.log("PLayer 2 Total is:"+player2.total);
      console.log(rollCount);
    }
    console.log(rollNumber);
  });

});
