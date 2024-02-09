export function changeBackgroundColor() {
  window.onload = function () {
    var colors = ["red", "aqua", "#ff99cc"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--main-color", randomColor);
  };
}
