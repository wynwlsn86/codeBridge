function show() {
 var box = document.getElementById('head');
 var pos = 90;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 1300) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos+=2;
     console.log(pos);
     box.style.width = pos + 'px';
   }
 }
}

function hide() {
 var box = document.getElementById('head');
 var pos = 1300;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 90) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos-=2;
     console.log(pos);
     box.style.width = pos + 'px';
   }
 }
}

function showf() {
 var box = document.getElementById('foot');
 var pos = 0;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 1300) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos+=2;
     console.log(pos);
     box.style.width = pos + 'px';
   }
 }
}

function hidef() {
 var box = document.getElementById('foot');
 var pos = 1300;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 0) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos-=2;
     console.log(pos);
     box.style.width = pos + 'px';
   }
 }
}

function showa() {
 var box = document.getElementById('stuff');
 var pos = 60;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 500) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos++;
     console.log(pos);
     box.style.height = pos + 'px';
   }
 }
}

function hidea() {
 var box = document.getElementById('stuff');
 var pos = 500;
 var id = setInterval(frame, 1);
function frame () {
   if(pos == 60) {
     clearInterval(id);
     console.log(pos);
   }
   else {
     pos-=2;
     console.log(pos);
     box.style.height = pos + 'px';
   }
 }
}
