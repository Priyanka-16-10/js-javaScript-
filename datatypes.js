"use strict"; 
//treat all JS code as newer version

//Primitive(7 types) : String , Number , Boolean , Null , Undefined , Symbol , BigInt
//Reference(non-primitive) : Array , Objects , Functions

// let name = "Lucky"
// let age = 20
// let isLoggedIn = false

//num = 2 to power 53
//bigint
//String = ""
//boolean
//null = standalone value
//undefined
//symbol => unique
//object

// console.log(typeof "Lucky")
// console.log(typeof 9)
// console.log(typeof null)
// console.log(typeof undefined)

const bigNum = 3486553451653978n

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name : "Lucky",
    age : 20
}

const myFunc = function(){}

console.log(typeof bigNum)

//stack(primitive) , Heap(non-primitive)
let myBook = "HarryPotter"
let anotherBook = "LordOfRings"
anotherBook = "Ikigai"
console.log(myBook)
console.log(anotherBook)