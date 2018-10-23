// Lightning exercise:
// 1. Create a basic `index.html` `main.js` project
// 2. Create three `<h3>` tags and add any text you want to each. Use javascript to listen for a click event on the header tags and `console.log` their text

let h3Event = document.getElementsByClassName("addEvent")

function handleH3Click (event) {
  console.log(event.target.textContent)
}

for (let i = 0; i < h3Event.length; i++) {
  h3Event.item(i).addEventListener("click", handleH3Click)
}