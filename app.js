const colors = ["green", "red", "white", "black", "yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
   //Pegando numero de 0 a 3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
})

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
}