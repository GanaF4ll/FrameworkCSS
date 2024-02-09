export function getDate() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("date").innerHTML =
    "<b>" + new Date().toLocaleDateString("fr-FR", options) + "</b>";
}
