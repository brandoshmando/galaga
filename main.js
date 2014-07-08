//Game JS
$('document').ready(function(){
var ship = new Ship().render();

  function Ship(){
    this.x = 445
    this.y = 490
    this.render = function(){
      this.$me =$('<div id="ship"><img src="galaga.png" alt="http://www.quickmeme.com/meme/3ugwv5"></div>')
      .css('left', this.x)
      .css('top', this.y)
      .css('position', 'absolute');
      $('#game-wrap').append(this.$me)
    };
  };


  $('window').on('keydown', function(ev){
    if (ev.keyCode === 65){
      ship.animate({
        left: "-= 5"
      })
    }else if(ev.keyCode === 68){
      left: "+= 5"
    };
  });
})












  $('window').on('keydown', function(ev){
    if (ev.keyCode === 65){
      ship.animate({
        left: "-= 5"
      })
    }else if(ev.keyCode === 68){
      left: "+= 5"
    };
  });
})













































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