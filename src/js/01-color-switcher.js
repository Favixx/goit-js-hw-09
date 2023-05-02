function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startChanging = document.querySelector('[data-start]');
const stopChanging = document.querySelector('[data-stop]');
const body = document.querySelector('body')
let timeoutId
function colorChanger(){
    const color = getRandomHexColor()
    body.style.backgroundColor = color;
}
startChanging.addEventListener("click", ()=>{
    colorChanger()
    timeoutId = setInterval(colorChanger, 1000);
    startChanging.setAttribute("disabled", "disabled")
    stopChanging.removeAttribute("disabled", "disabled")
})
stopChanging.addEventListener("click", ()=>{
    clearInterval(timeoutId);
    stopChanging.setAttribute("disabled", "disabled");
    startChanging.removeAttribute("disabled", "disabled");
})