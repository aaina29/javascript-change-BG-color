

const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ["#b2ebf2", "#ffcb8e", "#b7efcd", "#ffa931", "#ea907a", "#649d66", "#838383"];

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
