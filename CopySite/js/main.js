
let army = document.getElementById('army');
let armyTop = -340
let armyStop = setInterval(armyGuy, 5);

function armyGuy () {
  armyTop+=3;
  army.style.top = armyTop + 'px';
  console.log(armyTop);
  if(armyTop >= 0) {
    clearInterval(armyStop);
      console.log('STOPPPPPPPPPP');
  }
}

let prism = document.getElementById('prism');
let prismTop = -340
let prismStop = setInterval(prismGuy, 5);

function prismGuy () {
  prismTop+=3;
  prism.style.top = prismTop + 'px';
  console.log(prismTop);
  if(prismTop >= -5) {
    clearInterval(prismStop);
      console.log('STOPPPPPPPPPP');
  }
}

let pen = document.getElementById('pen');
let penBottom = -340
let penStop = setInterval(penGuy, 5);

function penGuy () {
  penBottom+=3;
  pen.style.bottom = penBottom + 'px';
  console.log(penBottom);
  if(penBottom >= -80) {
    clearInterval(penStop);
      console.log('STOPPPPPPPPPP');
  }
}

let popcorn = document.getElementById('popcorn');
let popcornBottom = -340
let popcornStop = setInterval(popcornGuy, 5);

function popcornGuy () {
  popcornBottom+=3;
  popcorn.style.bottom = popcornBottom + 'px';
  console.log(popcornBottom);
  if(popcornBottom >= -85) {
    clearInterval(popcornStop);
      console.log('STOPPPPPPPPPP');
  }
}

let yo = document.getElementById('yo');
let yoBottom = -340
let yoStop = setInterval(yoGuy, 5);

function yoGuy () {
  yoBottom+=3;
  yo.style.bottom = yoBottom + 'px';
  console.log(yoBottom);
  if(yoBottom >= -60) {
    clearInterval(yoStop);
      console.log('STOPPPPPPPPPP');
  }
}
