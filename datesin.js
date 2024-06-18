let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

let aDate = new Date(2024,2,16)
// let aDate = new Date(2024,2,16,12,0)
// let aDate = new Date("04-08-2024") //mm/dd/yy
// console.log(aDate.toDateString())
// console.log(aDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toDateString());
// console.log(newDate.getTime());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    month:'long'
}))