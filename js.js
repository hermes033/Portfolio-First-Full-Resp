function changeText() {
  var textElement = document.querySelector('.fre');
  var words = ["Freelancer", "Developer", "Designer"];
  let index = 0;

  setInterval(() => {
    textElement.textContent = words[index];
    index = (index + 1) % words.length;
  }, 2000);
}


window.onload = changeText;

var bar = document.querySelector('.bar');
var sideBar = document.querySelector('.navbar');
var clickBar = document.querySelector('.clickBar');
var orta = document.querySelector('.orta')
var isClickBarVisible = false;

bar.onclick = function () {
  if (!isClickBarVisible) {
    clickBar.style.display = 'block';
    sideBar.style.display = 'none';
    orta.style.visibility = 'hidden'
    isClickBarVisible = true;
  } else {
    clickBar.style.display = 'none';
    sideBar.style.display = '';
    orta.style.visibility = 'visible'
    isClickBarVisible = false;
  }
};

