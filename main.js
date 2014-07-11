//Game JS
$(document).ready(function(){
  var ship = new Ship().render();

  function Ship(){
    this.x = 300
    this.y = -50
    this.render = function(){
      this.$me =$('<div id="ship"><img src="galaga.png" alt="http://www.quickmeme.com/meme/3ugwv5"></div>')
      .css('left', this.x)
      .css('top', this.y)
      .css('position', 'relative');
      console.log(this.$me)
      $('#game-wrap').append(this.$me)
    };
  };

  // function Laser(){
  //   this.x = $('#ship').position().left + 14
  //   this.y = $('#ship').position().top
  //   this.fire = function(){
  //     this.$me = $('<div></div>')
  //     .css('height', '5px')
  //     .css('width', '0px')
  //     .css('left', this.x)
  //     .css('top', this.y)
  //     .css('border', '1px solid red')
  //     .css('postion', 'absolute')
  //     $('#game-wrap').append(this.$me)
  //   };
  // };

  $(document).keydown(function(ev){
    // console.log("triggered");
    // console.log(ev.which)
    switch(ev.which){
      case 65:
        $('#ship').animate({left: "-=5000"}, {duration: 3000});
        break;
      case 68:
        $('#ship').animate({left: "+=5000"}, {duration: 3000});
        break;
      case 87:
        // new Laser().fire();
        laser = $('<div class="laser"></div>')
        .css("height", "5px")
        .css("width", "0px")
        .css("border", "1px solid red")
        .css("left", $('#ship').position().left + 14)
        .css("top", "500px")
        .css("position", "absolute")
        $('#game-wrap').append(laser)
        // console.log(laser)
        laser.animate({top: "-=510"}, {duration: 200}, {complete: function(){
          $(this).hide();
          }});
        break;
    };
  });

  $(document).keyup(function(ev){
    switch(ev.which){
      case 65:
        $('#ship').animate().stop(true)
        break;
      case 68:
        $('#ship').animate().stop(true)
        break;
    };
  });

  setInterval(wallCollision, 05);

  function wallCollision(){
    console.log('Function Called')
    if ($('#ship').offset().left < $('#game-wrap').offset().left + 12 ){
      $('#ship').animate().stop(true);
    };
    if ($('#ship').offset().left + 30 > $('#game-wrap').offset().left + 690){
      $('#ship').animate().stop(true);
    };
    // if $('.laser').offset().top < $('#game-wrap').offset().top + 5){
    //   $()
    // };
  };
})



















// function Laser(){
 //    this.x = $('#ship').position().left
 //    this.y = 490
 //    this.height = 10

 //    this.fire = function(){
 //      var laser = $('<div id="laser></div>')
 //      .css('left', this.x)
 //      .css('top', this.y)
 //      .css('height', this.height)
 //      .css('border', '1px solid red')
 //      .css('position', 'absolute')
 //      $('game-wrap').append(laser)
 //      console.log(laser)
 //      laser.animate({top: "+=1000"})
 //    };
 //  };



























//   setInterval(moveShip, 1000); //Checks keys every 2 miliseconds to replicate held down key
//   var keys = {};
// //Pushes depressed key into keys and sets to true
//   $( document ).keydown(function(ev){
//   keys[ev.keyCode] = true;
//   console.log('pressed!')
//   });
// //Removes same key when key is released
//   $( document ).keyup(function(ev){
//   delete keys[ev.keyCode];
//   });

// //Moves ship using keys object
//   function moveShip(){
//     console.log('movin...')
//     for (var direction in keys){
//       // if (!keys.hasOwnProperty(direction)){ //Stops from comparing to empty object.
//         console.log('made it')
//         if (direction  == 65) {
//           $('#ship').animate({left: "-=5"}, 0);
//         }if (direction  == 68) {
//           $('#ship').animate({left: "-=5"}, 0);
//         };
//       };
//     // };
//   };
// })



































//   $('window').on('keydown', function(ev){
//     if (ev.keyCode === 65){
//       ship.animate({
//         left: "-= 5"
//       })
//     }else if(ev.keyCode === 68){
//       left: "+= 5"
//     };
//   });
// })
// Cirlcle 1

// $('document').ready(function(){
//   var someCircles = [];
//   for (var i=0; i<10; i++){
//     someCircles.push(new Circle());
//     someCircles[i].render();
//   };
// })
// function Circle(){
//   this.x = Math.random()*450;
//   this.y = Math.random()*450;
//   this.diameter = 30 + Math.random() * 50;
//   this.speed = 500 + Math.random() * 1500;
//   this.render = function(){
//     this.$me = $('<div class="circles"></div>')
//     .css('left', this.x)
//     .css('top', this.y)
//     .css('height', this.diameter)
//     .css('width', this.diameter);
//     $('#wrapper').append(this.$me)
//   };
// };

// $('.circle').animate({
//   top: "+=300px",
//   left: "+=300px"
// }, {
//   complete: function() {
//     alert("I moved");
//   }
// });


// this.kill = function(){
//   this.$me.css('backgroun-color', 'red').effect({
//     effect: 'explode',
//     duration: 100,
//     complete: function(){
//       $(this).remove();
//     }, {
//       queue: false;
//     }
//   });
// }