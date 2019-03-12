

const openModal = () => {
  document.getElementById('modal').style.display = "block";
};

const closeModal  = () => {
  document.getElementById('modal').style.display = "none";
};

var currentPic = 1;

let changePic = (n) => {
  displayPic(currentPic += n);
  // console.log('hello');
}

let displayPic = (n) => {
  let i = 0;
  let picArray = document.getElementsByClassName('slide');
  console.log(picArray);
  if(n > picArray.length){
    currentPic = 1;
  }
  if(n < 1){
    currentPic = picArray.length;
  }
  while(i < picArray.length){
    picArray[i].style.display = "none";
    i++;
  }
  picArray[currentPic-1].style.display = "block";
}


displayPic(currentPic);
// ################ Slide Show ###################
