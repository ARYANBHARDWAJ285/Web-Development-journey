const myName = ["rahul", "ankit", "sunil", "arun"]

const name =  myName.forEach( (val) => {  // for each loop does not return any value to fix this we have to go with another appraoch
    // console.log(val);
    return val; 
    
})

// console.log(name);  // undefined 

// to solve this we use the the filter() method 

// ---------- Filter  ---------------------- 

const number = [1,2,3,4,5,6]

const newnumber = number.filter( (val) => val > 3 )
console.log(newnumber);  // [ 4, 5, 6 ] 

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);  //  [ 'exuberant', 'destruction', 'present' ]



const number2 = [1,2,3,4,5,6]

const newnumber1 = number2.filter( (val) => {val > 3} ) // [] because out of the scope { } we need to use the return 
console.log(newnumber1);

const newnumber2 = number2.filter( (val) => {
    return val > 3
} )
console.log(newnumber2);  // [ 4, 5, 6 ]


//----  using the for each  ---- 

const num = []

number2.forEach((val) => {
    if(val>3){
        num.push(val)
    }
})
console.log(num); // [ 4, 5, 6 ]
