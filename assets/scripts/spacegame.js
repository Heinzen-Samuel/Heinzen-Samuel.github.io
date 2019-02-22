var myGamePiece;
var myObstacles = [];
var astOne;
var astTwo;
var astThree;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
  canvas : document.getElementById('myCanvas'),

  start : function() {
    this.canvas.width = 600;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    this.frameNo = 0;    
    this.interval = setInterval(updateGameArea, 20);

    window.addEventListener('keydown', function (e) {
      myGameArea.keys = (myGameArea.keys || []);
      myGameArea.keys[e.keyCode] = true;
    })
    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false; 
    })
  },

  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y; 

  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  this.newPos = function() {
    if (this.speedX == -1) {
      if (this.x != 0) {
        this.x += this.speedX;
      }
    }

    if (this.speedX == 1) {
      if (this.x != 570) {
        this.x += this.speedX;
      }
    }

    if (this.speedY == -1) {
      if (this.y != 0) {
        this.y += this.speedY;
      }
    }

    if (this.speedY == 1) {
      if (this.y != 270) {
        this.y += this.speedY;
      }
    }
  }

  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
}

function updateGameArea() {
  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
    } 
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(150)) {
    x = myGameArea.canvas.width;
    y = myGameArea.canvas.height - 200
    myObstacles.push(new component(10, 200, "green", x, y));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;

  if (myGameArea.keys && myGameArea.keys[37]) {
    myGamePiece.speedX = -1; 
  }

  if (myGameArea.keys && myGameArea.keys[39]) {
    myGamePiece.speedX = 1; 
  }

  if (myGameArea.keys && myGameArea.keys[38]) {
    myGamePiece.speedY = -1; 
  }

  if (myGameArea.keys && myGameArea.keys[40]) {
    myGamePiece.speedY = 1; 
  }

  myGamePiece.newPos();
  myGamePiece.update();
}



function moveup() {
  myGamePiece.speedY = -1; 
}

function movedown() {
  myGamePiece.speedY = 1; 
}

function moveleft() {
  myGamePiece.speedX = -1; 
}

function moveright() {
  myGamePiece.speedX = 1; 
}

function clearmove() {
  myGamePiece.speedX = 0; 
  myGamePiece.speedY = 0; 
}