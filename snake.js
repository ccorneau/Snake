var size = 30; // px
var nRow = 20;
var nCol = 33;
var snakeplus;

$(document).ready(function () { // quand le HTML est chargé
  console.log("ready!");
  init()

});
//Initialisatoin du jeu
function init() {
  //snakeplus();
  //createApple();
  positionApple();
}
//Placement de la pomme de facon aléatoire
function positionApple() {
  console.log('positionApple')
  var x = Math.round(Math.random() * nCol) * size;
  var y = Math.round(Math.random() * nRow) * size;
  var $apple = $('.apple'); // document.querySelector('.apple')
  $apple.css({
    'top': y + 'px',
    'left': x + 'px',
  });
}

/*function snakeplus() {
  var length = 5; //Length of the snake
  snakeplus = [].insertAdjacentHTML('afterbegin', '<div class="snake"></div>'); //Empty array to start with
  for (var i = length +1; i >= 0; i++) {
    //This will create a horizontal snake starting from the top left
    snakeplus.push({ x: i, y: 0 });
    console.log("snakeplus");
  }
}
snakeplus();
*/
//Déclaration des touches de direction pour controler le snake
var TOP = 38, BOTTOM = 40, LEFT = 37, RIGHT = 39;

$(document).keydown(function (e) {
  console.log('e:', e);
  var snake = $('.snake');
  var position = snake.position();
  switch (e.keyCode) {
    case BOTTOM:
      var top = position.top + 30;
      snake.css({ 'top': top + 'px' });
      if (checkColision()) snake.css({ 'top': (top - 30) + 'px' });
      break;
    case TOP:
      var top = position.top - 30;
      snake.css({ 'top': top + 'px' });
      if (checkColision()) snake.css({ 'top': (top + 30) + 'px' });
      break;
    case LEFT:
      var left = position.left - 30;
      snake.css({ 'left': left + 'px' });
      if (checkColision()) snake.css({ 'left': (left + 30) + 'px' });
      break;
    case RIGHT:
      var left = position.left + 30;
      snake.css({ 'left': left + 'px' });
      if (checkColision()) snake.css({ 'left': (left - 30) + 'px' });
      break;
  }
});

function checkColision() {
  var boum = true;
  $('#game').each(function () {
    if (colision($('.snake'), $(this))) {
      boum = false;
      return;
    }
  });

  return boum;
}

function colision(elt1, elt2) {
  var p_elt1 = elt1.position();
  var p_elt2 = elt2.position();

  if (p_elt1.left < p_elt2.left + elt2.width() &&
    p_elt1.left + elt1.width() > p_elt2.left &&
    p_elt1.top < p_elt2.top + elt2.height() &&
    elt1.height() + p_elt1.top > p_elt2.top) {
    return true;
  }
}

/*
//Récupération des données du canvas HTML
var canvas = $('canvas');
var context = canvas[0].getContext('2d');
var width = $('canvas').width();
var height = $('canvas').height();


//Création du snake
function createSnake(){
    var snake = [{
        var length = ["","","",""];
        context.fillStyle = "green";
        context.fillRect(0, 0, 30, 30);
   }]

}
//Creation de la pomme 
function createApple(){
    var apple = [{
        context.fillStyle = "red";
        context.fillRect(0, 0, 30, 30);
    ]}
}
//Placement de la pomme de facon aléatoire
function positionApple(){
    var x = Math.random(Math.round());
    var y = Math.random(Math.round());
    snake.css({'left': x + 'px'}
    snake.css({'top': y + 'px'}
}
//Mange pomme +1 pour la variable serpent
function eatApple(){
    if (position.snake == position.apple) {
        snake++
    }
}
//Colission
function colission (){

}
*/