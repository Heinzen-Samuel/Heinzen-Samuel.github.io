var myGamePiece;
var audio = document.getElementById("audio");
var myAsteroids = [];

function startGame() {
    play();
    myGameArea.start();
    myGamePiece = new ship(30, 30, "assets/img/spaceship.png", 280, 140, "image");  
}

function play(){
   audio.volume = 0.1;
   audio.play();
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

function ship(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;

  this.update = function(){
    ctx = myGameArea.context;
    if (type == "image") {
      ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
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

    if (crash) {
      myGamePiece.image.src = "assets/img/explosion.png";
    }

    return crash;
  }
}

function asteroid(width, height, x, y, vertDir, horiDir, color, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.vertDir = vertDir;
  this.horiDir = horiDir;

  this.update = function(){
    ctx = myGameArea.context;
    if (type == "image") {
      ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

function updateGameArea() {
  var x, y, r, vd, hd;

  for (i = 0; i < myAsteroids.length; i += 1) {
    if (myGamePiece.crashWith(myAsteroids[i])) {
      myGameArea.stop();
      return;
    } 
  }

  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(30)) {
    r = Math.floor(Math.random() * 4) + 1;

    console.log(r);

    switch(r) {
      case 1:
        y = 0;
        x = getRndInteger(0, 570);
        vd = 1.5;
        hd = 0;
        break;
      case 2:
        y = 300;
        x = getRndInteger(0, 570);
        vd = -1.5;
        hd = 0;
        break;
      case 3:
        x = 0;
        y = getRndInteger(0, 270);
        hd = 1.5;
        vd = 0;
        break;
      case 4:
        x = 600;
        y = getRndInteger(0, 270);
        hd = -1.5;
        vd = 0;
        break;
      default:
        console.log(r);
    }

    myAsteroids.push(new asteroid(30, 30, x, y, vd, hd, "assets/img/asteroid.png", "image"));
  }

  for (i = 0; i < myAsteroids.length; i += 1) {
    myAsteroids[i].x += myAsteroids[i].horiDir;
    myAsteroids[i].y += myAsteroids[i].vertDir;
    myAsteroids[i].update();
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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}