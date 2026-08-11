/*

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);


*/

// accumulator take the initial  values which we set it 0  we can set it any value like 5 , 9 
// curretnValue is take the current value of the array  like 1 then 2  then 3

const  myNumber  =  [1,2,3,4]


// ----------- using function ------

// const  total = myNumber.reduce( function (accumulator, currentValue)  {
    // console.log(`accumulator  value is :- ${accumulator} and currentVal value is :- ${currentValue} `);
    
    // return  accumulator + currentValue 

// }, 0 )


/*

accumulator  value is :- 0 and currentVal value is :- 1 
accumulator  value is :- 1 and currentVal value is :- 2 
accumulator  value is :- 3 and currentVal value is :- 3 
accumulator  value is :- 6 and currentVal value is :- 4 

10

*/


//-------- using arrow function 

const total =  myNumber.reduce( (accVal,currVal) => accVal + currVal , 0)
console.log(total) // 10


const amazonCart = [ 
  {
    item1 : "basketBall",
    price : 1999 
  },
  {
    item2 : "iphone 12 max ",
    price : 149999 
  },
  {
    item3 : "laptop",
    price : 500000 
  },
  {
    item4 : "mic",
    price : 2999 
  },
  {
    item5 : "book",
    price : 999 
  },
]

const totalBill = amazonCart.reduce( (accumulatorValue  , cartItemValue) =>  accumulatorValue + cartItemValue.price , 0)
console.log(totalBill);
