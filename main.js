//Instantiates new ship object on page ready
$(document).ready(function(){
  var ship = new Ship().render();

//Ship Object
  function Ship(){
    this.x = 300
    this.y = -50
    this.render = function(){
      this.$me =$('<div id="ship"><img src="galaga.png" alt="http://www.quickmeme.com/meme/3ugwv5"></div>')
      .css({
        left: this.x,
        top: this.y,
        position: 'relative',
      });
      $('#game-wrap').append(this.$me)
    };
  };
//Laser Object
  function Laser(){
    this.x = $('#ship').position().left + 14
    this.y = 450 //$('#ship').position().top
    this.fire = function(){
      this.$me = $('<div class="laser"></div>')
      .css({
        height: '5px',
        width: '0px',
        left: this.x,
        top: this.y,
        border: '1px solid red',
        position: 'absolute'
      });
      $('#game-wrap').append(this.$me)
      this.$me.animate({top: 0}, 200).remove
    };
  };
//Listens for keydown event and executes code to move ship left and right
  $(document).keydown(function(ev){
    switch(ev.which){
      case 65:
        $('#ship').animate({left: 0}, calculateSpeed('L'), 'linear');

        break;
      case 68:
        $('#ship').animate({left: "670"}, calculateSpeed('R'),  'linear');
        break;
      case 87:
        new Laser().fire();
        break;
    };
  });
//Listens for keyup event and executes cod to stop animation
  $(document).keyup(function(ev){
    switch(ev.which){
      case 65:
        $('#ship').animate().stop(true);
        break;
      case 68:
        $('#ship').animate().stop(true);
        break;
    };
  });
// Function to calculate speed of spaceship based on its orientation. This
// keeps the animation consistent
  function calculateSpeed(direction){
    var shipPosition = parseInt(window.$('#ship').css('left'));
    var animationSpeed = 1;
    var animDur ;
    if (direction === "L") {
      animDur = shipPosition / animationSpeed;
    } else {
      animDur = (700 - 30 - shipPosition) / animationSpeed;
    }
    return animDur;
  };
})