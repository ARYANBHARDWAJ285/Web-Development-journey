// For OF Loop  Arrya  Specific Loops 

const myArray = [1, 2, 3, 4, 5, 6, 7]

for (const value of myArray) {
    // console.log(value)

    /*
    
Output :- 
1
2
3
4
5
6
7
    
    */
}

const carName = ["BMW", "M2", "M4", "M8"]
for (const name of carName) {
    // console.log(`Car Name is : ${name}`)
    /*
    
    Output : 
    
    Car Name is : BMW
    Car Name is : M2
    Car Name is : M4
    Car Name is : M8
    
    */

}


//-------------------- Map ------------------ 
//  add the unique value 
//  store the value in the key - value pair 
const bmw = new Map()

bmw.set("car1", "M2")
bmw.set("car2", "M4")
bmw.set("car3", "M8")
bmw.set("car4", "M5")
bmw.set("car1", "M2")

/*

Output : 

Map(4) {
  'car1' => 'M2',
  'car2' => 'M4',
  'car3' => 'M8',
  'car4' => 'M5'  

  // it only print the one key and value 
}

*/
// console.log(bmw)

for (const key of bmw) {
    console.log(key)

    /*

    Output : - IN the Array 
    
    [ 'car1', 'M2' ]
    [ 'car2', 'M4' ]
    [ 'car3', 'M8' ]
    [ 'car4', 'M5' ]
     
    */
}

//  need the separate the value so we have to  destructure it 

for (const [key, value] of bmw) {
    // console.log(key, ":-", value)

/*
    
Output :- 
car1 :- M2
car2 :- M4
car3 :- M8
car4 :- M5

*/
}


const myObject = {
    "name1" : "Ankit" ,
    "name2"  : "Rahul",
    "name3" : "Aman"
}

const myObject = {
    // name1 : "Ankit" ,    
    // name2  : "Rahul",        myobject is not iterable 
    // name3 : "Aman"
}

for (const [key , value] of myObject) {
    // console.log(key , ":-" , value )   myObject is not iterable
}
