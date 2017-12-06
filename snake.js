var map = 40;
var snakeHead = [0,5];
var snakeBody = [
    [0,5],[0,4],[0,3],[0,2],[0,1] 
];
var direction = "droite";
var speed = 100;
var score = 0;
var snakeSize = snakeBody.length;


$(document).ready(function(){
    createMap();
    startGame();
    move();
    createApple();
      
});

function createMap() {
    var td ="";
    var tr = [];
    for(i=0;i<map;i++) {
        td += "<td></td>";
    }
    for(i=0;i<map;i++) {
        tr.push("<tr>"+td+"</tr>");
    }
    $(document.body).append("<table>"+tr.join('\n')+"</table>");
}

function createSnake() {
    $('td').removeClass('snakeHead snakeBody');
    for (var cell in snakeBody) {
        $('tr').eq(snakeBody[cell][0]).find('td').eq(snakeBody[cell][1]).addClass('snakeBody')
    }
        $('tr').eq(snakeHead[0]).find('td').eq(snakeHead[1]).addClass('snakeHead')
}

function actualitySnake() {
    var newHead = [];
    if (direction == "droite") {
        newHead = [snakeHead[0],snakeHead[1]+1];
    }
    else if (direction == "gauche") {
        newHead = [snakeHead[0],snakeHead[1]-1];
    }
    else if (direction == "haut") {
        newHead = [snakeHead[0]-1,snakeHead[1]];
    }
    else if (direction == "bas") {
        newHead = [snakeHead[0]+1,snakeHead[1]];
    }

    cell = $('tr').eq(newHead[0]).find('td').eq(newHead[1]);
    if (cell.hasClass('fruit')) {
        snakeBody.push([]);
        createApple();
        score+=100;
        $('#score span').html(''+score);
    }
    else if (cell.hasClass('snakebody')) {
        gameOver();
    }
    else if (newHead[0]<0 || newHead[1]<0) {
        gameOver();
    }
else if (newHead[0]>map || newHead[1]>map) {
    gameOver();
}
    for(i=snakeSize-1;i>0;i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    snakeBody[0] = snakeHead = newHead;
    createSnake();
}
// vitesse de deplacement du snake
function startGame (){
    go = setInterval(actualitySnake,speed);
}

//deplacement snake
function move() {
    var gauche = 37, haut = 38, droite = 39, bas = 40;
    //Detection des touches
    $('body').keydown(function(e){
        //alert(e.keyCode);  
    if(e.keyCode == gauche) {
        direction ="gauche";
    }
    else if(e.keyCode == droite) {
        direction ="droite";
    }
    else if(e.keyCode == haut) {
        direction ="haut";
    }
    else if(e.keyCode == bas) {
        direction ="bas";
    }})
}

//creation de la pomme
function createApple() {
    $('td').removeClass('fruit');
    fruit = [parseInt(Math.random()*map),parseInt(Math.random()*map)];
    $('tr').eq(fruit[0]).find('td').eq(fruit[1]).addClass('fruit');
    
    //return parseInt(Math.random()*map); 
}
//gameover
function gameOver() {
    $('#gameover').show('fast',function(){
        $(this).animate({top:100},'slow');
    })
    clearInterval(go);
    //die();
}