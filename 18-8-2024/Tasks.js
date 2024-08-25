// const numbers = [10,24,57,89,7,31,751,89,31,24,2]
// console.log(numbers)

// // Task one print the sum of the array elements

// /* let sum = 0;
// sum = sum + numbers[0]
// sum = sum + numbers[1]
// sum = sum + numbers[2]
// ...
// sum = sum + numbers[10] */

// let sum = 0
// for(let counter = 0 ;counter < numbers.length ; counter+=1){
//      sum += numbers[counter];
// }

// console.log(sum)

// //2 - Reverse a string 
// //console.log(name.length)
// const reverseString = function(name){
//      let reversed = ""
//      for(let counter = name.length - 1 ; counter >= 0 ;counter--){
//           //console.log(counter)
//           reversed+= name[counter]
//      }
//      console.log(reversed,"reverseeeeeeeeeeeeeeeeeeeeeeeed")
//      return reversed;
// }
// let name = "mohamed" //"demahom"

// console.log(reverseString("ahmed"),"testtttttttttt")
// reverseString("hello")

// //3 Max
// const numbers2 = []
// if(numbers2.length > 0){
//      let max = numbers2[0]
// for(let counter = 0 ; counter < numbers.length ; counter++){
//      console.log(numbers2[counter])
//      if(numbers2[counter] > max ){
//           max = numbers2[counter] 
//      }
// }
// console.log(max)

// }else{
//      console.log("your array is empty")
// }

// //Task 4
// //arttra

// const task4 = "arra"
// const reversed = reverseString(task4)
// console.log(task4,reversed)
// if(reversed == task4){
//      console.log(true)
// }else{
//      console.log(false)
// }

// //Task 5
// const task5 = "mohamed"
// const vowels = "aeiouAEIOU"
// let Count = 0 
// for(let counter =0 ;counter < task5.length ; counter++){
//      if(vowels.includes(task5[counter])){
//           Count++
//      }
// }
// console.log(Count)
// //console.log(task5.includes("l" || "o"))


// //Remove 





// //Remove 

// let task7 = "Mohamed MoMlkg"
// let arrayofCharacters = task7.split("")
// console.log(arrayofCharacters)
// let newArray = []

// console.log(newArray.includes("Mo"))
// arrayofCharacters.map((element)=>{
//      if(!newArray.includes(element)){
//           newArray.push(element)
//      }
// })

// console.log(newArray)
// arrayofCharacters =newArray.join("")

// // //map forEach

// // //newArray.map()

// // for(let counter = 0;counter < arrayofCharacters.length ;counter++){
// //      console.log(arrayofCharacters[counter])
// // }
// // const d= function (character){
// //      character+=1
// //      console.log(character)
// // }
// // let c = 5

// // arrayofCharacters.map(d)
// // arrayofCharacters.map((char)=>{
// //      console.log(char)
// // })
// // mohamed ,m
// const task8 = (arr,sChar) =>{
//      let counter = 0
//      arr = arr.split("")
//      arr.map((e)=>{
//           if(e == sChar)
//                counter++
//      })
//      console.log(counter)
// }
// task8("Moooahmed","o")

// const removeDu = (n) =>{
//      let arrayofCharacters = n.split("")
//      console.log(arrayofCharacters)
//      let newArray = []
     
//      console.log(newArray.includes("Mo"))
//      arrayofCharacters.map((element)=>{
//           if(!newArray.includes(element) && element != " "){
//                newArray.push(element)
//           }
//      })
     
     
//      console.log(newArray)
//      console.log(newArray.length)
     
//      arrayofCharacters =newArray.join("")
//      }
     
//      removeDu("1 2 3 4 5 5 4")

let name = "mohamed"
let age = 24
let city = "cairo"

let name2 = "salma"
let age2 = 19
let city2 = "kjnbh"

//[["mohamed",24,"cairo"],["salma","jnbh",19]]

let user = {
     name: "mohamed",
     age: 24,
     city: null
}

user.edu = "cs"
user.name = "kljkbh"
console.log(user)

let users = [{name :"mohamed"},{age:24,name:"nour"}]
console.log(users[1].name)
console.log(users[0]["name"])

const getData = (key) =>{
     console.log(user[key])
}

getData("name")
//dont do it
// const user2 = user
// user2.name = "sama"
// console.log(user2)
// console.log(user)

let User = function(name,age,c){
     this.name = name;
     this.age = age
     this.city = c
} 


const user1 = new User("mohamed",24,"Cairo")
console.log(user1)
user2 = new User("mohamed",20,"Cair")
console.log(user2)

let userss = [
     {name :"mohamed",age:25}, 
     {name :"marwan",age:20},
     {name :"nada",age:21},
     {name :"nour",age:22},
     {name :"rawan",age:19}
]

let newArray = []
userss.map((user)=>{
     if(user.age >= 22){
          newArray.push(user)
     }
})

console.log(newArray)








