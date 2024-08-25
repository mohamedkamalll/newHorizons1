const numbers = [10,24,57,89,7,31,751,89,31,24,2]
console.log(numbers)

// Task one print the sum of the array elements

/* let sum = 0;
sum = sum + numbers[0]
sum = sum + numbers[1]
sum = sum + numbers[2]
...
sum = sum + numbers[10] */

let sum = 0
for(let counter = 0 ;counter < numbers.length ; counter+=1){
     sum += numbers[counter];
}

console.log(sum)

//2 - Reverse a string 
//console.log(name.length)
const reverseString = function(name){
     let reversed = ""
     for(let counter = name.length - 1 ; counter >= 0 ;counter--){
          //console.log(counter)
          reversed+= name[counter]
     }
     console.log(reversed,"reverseeeeeeeeeeeeeeeeeeeeeeeed")
     return reversed;
}
let name = "mohamed" //"demahom"

console.log(reverseString("ahmed"),"testtttttttttt")
reverseString("hello")

//3 Max
const numbers2 = []
if(numbers2.length > 0){
     let max = numbers2[0]
for(let counter = 0 ; counter < numbers.length ; counter++){
     console.log(numbers2[counter])
     if(numbers2[counter] > max ){
          max = numbers2[counter] 
     }
}
console.log(max)

}else{
     console.log("your array is empty")
}

//Task 4
//arttra

const task4 = "arra"
const reversed = reverseString(task4)
console.log(task4,reversed)
if(reversed == task4){
     console.log(true)
}else{
     console.log(false)
}

//Task 5
const task5 = "mohamed"
const vowels = "aeiouAEIOU"
let Count = 0 
for(let counter =0 ;counter < task5.length ; counter++){
     if(vowels.includes(task5[counter])){
          Count++
     }
}
console.log(Count)
//console.log(task5.includes("l" || "o"))


//Remove 





//Remove 

let task7 = "Mohamed MoMlkg"
let arrayofCharacters = task7.split("")
console.log(arrayofCharacters)
let newArray = []

console.log(newArray.includes("Mo"))
arrayofCharacters.map((element)=>{
     if(!newArray.includes(element)){
          newArray.push(element)
     }
})

console.log(newArray)
arrayofCharacters =newArray.join("")

// //map forEach

// //newArray.map()

// for(let counter = 0;counter < arrayofCharacters.length ;counter++){
//      console.log(arrayofCharacters[counter])
// }
// const d= function (character){
//      character+=1
//      console.log(character)
// }
// let c = 5

// arrayofCharacters.map(d)
// arrayofCharacters.map((char)=>{
//      console.log(char)
// })