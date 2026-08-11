// For each  loop very useful for the array 

// callback  function don't have the  name 
const mylanguage = ["javascript", "python", "c++", "java"]

// mylanguage.forEach( function (val){
    //  console.log(val);

     // Basic 
 /*

javascript
python
c++
java

*/

// } )

//  using the arrow funtion

mylanguage.forEach( (val)=> {
    // console.log(val);

    /*
    javascript
python
c++
java

*/
    
})

// Using function 

function printLanguage (val){
    console.log(val);
    
}
// mylanguage.forEach(printLanguage)

/*

javascript
python
c++
java

*/

//  =>  For each  can have multiple parametere not single parameter 

mylanguage.forEach( (val , index , arr) => {
    // console.log(val ,index , arr);

/*

javascript 0 [ 'javascript', 'python', 'c++', 'java' ]
python 1 [ 'javascript', 'python', 'c++', 'java' ]
c++ 2 [ 'javascript', 'python', 'c++', 'java' ]
java 3 [ 'javascript', 'python', 'c++', 'java' ]

*/
})


// array of object 

const userProfile = [
    {
        userName : "Rahul" ,
        userAccountName : "rah---"
    },
    {
        userName : "sumit" ,
        userAccountName : "sum---"
    },
    {
        userName : "arun" ,
        userAccountName : "ar---"
    },
]

userProfile.forEach( (item) => {
    // console.log(item.userAccountName);

    /*
    rah---
sum---
ar--- 
*/

console.log(item.userName);

/*
Rahul
sumit
arun

*/

    
})

