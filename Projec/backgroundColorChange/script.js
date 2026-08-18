//gererate a random  color 

const randomColor =  function(){
    const hex = '0123456789ABCDEF' ;
    let color = "#" ;
    for(let i = 0  ; i < 6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color ;
};
console.log(randomColor()) ;
let changeColor ;
const startchangeColor = function (){
    if (!changeColor){
         changeColor = setInterval(changeBackground , 1000);
    }
   
    function changeBackground(){
         document.body.style.backgroundColor = randomColor();
    }
   
};
const stopChangeColor = function(){
    clearInterval(changeColor);
    changeColor = null ;
};
document.querySelector('#start').addEventListener('click' , startchangeColor);

document.querySelector('#stop').addEventListener('click',stopChangeColor);
