/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console


const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

bouton1.addEventListener("click", setBg);
setBg();



var object = document.getElementById('image');

object.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
  object.style.position = "absolute"
};