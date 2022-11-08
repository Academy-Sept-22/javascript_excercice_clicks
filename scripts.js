let container = document.querySelector("#main-conatiner")


container.addEventListener("click", click => {
  let div = click.target;

    div.style.backgroundColor = getRandomColor();
    div.style.border = `solid 10px ${getRandomColor()}`;

})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
