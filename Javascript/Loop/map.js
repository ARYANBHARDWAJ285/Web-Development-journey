//  Map  

const myNumber = [1,2,3,4,5,6]

// const newNumber = myNumber.map( (val) => val+10) 
// console.log(newNumber);  // [ 11, 12, 13, 14, 15, 16 ]


// ------- chaining ---- 

const newNumber = myNumber
                  .map( (val) => val*10 )
                  .map( (val) => val  +1)  // [ 11, 21, 31, 41, 51, 61 ] if you change val -> num in the second map the it will also give the same output 
                  .filter( ( val ) => val > 30 )  // [ 31, 41, 51, 61 ] 
console.log(newNumber); 
