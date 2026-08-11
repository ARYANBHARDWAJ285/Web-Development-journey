//  For In Loop is usally give the index value 

const language = ["javascript", "python", "c++", "java"]

for (const value in language) {
    // console.log(value)
    
 /*

0
1
2
3
 */
//    console.log(language[value])   
/*
javascript
python
c++
java
*/
 
}

const mygame = {
      game1 : "bgmi" ,
      game2 : "gta5",
      game3 : "cod"
}

for (const key in mygame) {
//   console.log(key)
    /*
game1
game2
game3
    */

// console.log(`${key} and there value is ${mygame[key]}`)
/*
game1 and there value is bgmi
game2 and there value is gta5
game3 and there value is cod
*/

// console.log(mygame[key])
/*
bgmi
gta5
cod
*/

}

const bmw = new Map()

bmw.set("car1", "M2")
bmw.set("car2", "M4")
bmw.set("car3", "M8")
bmw.set("car4", "M5")
bmw.set("car1", "M2")

for (const key in bmw) {
   console.log(key)           // is not iteratable 
}
