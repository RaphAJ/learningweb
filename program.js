// alert('hello')
// prompt('your name')
// confirm('do you want to quit game?')

// console.log('hello console.log')
// console.error('i am error')
// console.warn('this is a warning')
// console.info('i am an info')

// let x=2
// let y=4
// let z = x+y
// console.log(z)

// random numbers generation

// let rand = Math.random()
// console.log(rand)

// let res = Math.pow(2,3)
// console.log(res)

// how to generate random number from 1-10
// let randNum = Math.floor(Math.random()*10)+1
// console.log(randNum)

// decision making in javascript
// if statement, else statement, else if statement
// if(4<3){
//     alert ('correct')
// }else if(9>6){
//     alert("very correct")
// }else if (8<5){
//     alert('very very correct')
// } else {
//     alert('none of the conditions is correct')
// }
// the else statement runs when all the conditions are correct

// if(4<3){
//     alert ('correct')
// }else if(3>6){
//     alert("very correct")
// }else if (3<5){
//     alert('very very correct')
// }else {
//     alert('none of the conditions is correct')
// }

// let username = prompt('Username')
// if(username.length<4){
//     alert('Username characters must be greater than four')
// }else{
//     alert(`Welcome ${username.toUpperCase()}!`)
// }

// && (AND)
// write a code that can accept users and give them a ticket number with the first three characters of their name in uppercase. The code should only accept those that their username has more than 3 characters. ticket random number should be between 1000-2000.
// eg
// joseph
// welcome Joseph your ticket number is JOE12223
    //  solution
// let username = prompt('Username')
// let randNum =Math.floor(Math.random()*1000)+1000
// if(username.length<3){
//     alert('Username characters must be greater than three')
// }else{
//     alert(`Welcome ${username.toUpperCase()} your ticket number ${username.slice(0,3).toUpperCase()}${randNum} `)
// }


// let email = prompt('enter your email')
// let password = prompt('enter your password')
// if ( (email.includes('@')&&email.length>7)&&(password.length>8) ){
//     alert(`welcome ${email}`)
// }else{
//     alert('email must contain @, and must have at least 7 character, and password must be greater than 8 characters')
// }

// assignment generate random number between 5-10
// let randNum=Math.floor(Math.random()*5)+5
// console.log(randNum)



// let age = prompt('enter your age')
// if(age>=60){
//     alert('Free')
// }else if(age>=30 && age<=59 ){
//     alert('Service 2000 naira')
// }else if(age>=18 && age<=29){
//     alert('Service 1200 naira')
// }else{
//     alert('Not permitted')
// }

//   || (OR)
// write a program that can take graduates that studied any engineering course or computer science with at least 3 years expirence of web development to work in our facility. 

// let course = prompt('Enter course of Study')
// let expireince =Number(prompt('Enter Years of Expirience'))

// if( ((course.trim().toLowerCase().includes('engineering') )|| (course.trim().toLowerCase()=='computer science')) && expireince>=3){
//     alert('Qualified Credentials, we will get back to you shortly')
// }else{
//     alert('Unqualified Credential')
// }


// // NOT
// let course = prompt('Enter course of Study')
// if(!course){
//     alert('field cannot be empty')
// }else{
//     alert('credentials received')
// }


// Arrays

// const cars=['volvo','benz','mazda']
// console.log(cars)
//  arrays are indexed
// because arrays are indexed we can access array value through the indecies
// volvo
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// arrays have length
// console.log(cars.length)

// push and pop
// the push can help us add to the array, it adds the new element to the last part of the array. You can push more than one elemnt
// cars.push('camry','corolla')
// console.log(cars)

// pop removes the last element from the array
// cars.pop()
// console.log(cars)

// shift and unshift
// the shift removes the first element and unshift adds it as the first element in the array
// const cars = ['volvo','benz','mazda']
// cars.shift()
// console.log(cars)

// cars.unshift('VIP')
// console.log(cars)


// how to replace an element with another element in an array

// const cars = ['volvo','benz','mazda']
// I want  to replace volvo with corolla
// cars[0]='corolla'
// console.log(cars)

// concat method is joining of text together or adding items
// const computers = ['HP','Lenovo','Dell']
// const newComputers = ['Samsung','Mac']

// const allComputers = computers.concat(newComputers)
// console.log(allComputers)
// console.log(computers)
// console.log(newComputers)

//includes
// const computers = ['HP','Lenovo','Dell']
// const res = computers.includes('Mac')
// console.log(res)

//indexOf
// const computers = ['HP','Lenovo','Dell']
// const res = computers.indexOf('Mac')
// console.log(res)

// join
// const computers = ['HP','Lenovo','Dell']
// const res = computers.join(', ')
// console.log(res)

// const computers = ['HP','Lenovo','Dell']
// const emt= []
// const res = computers.join('')
// emt.push(res)
// console.log(emt)// 

// reverse
// const computers = ['HP','Lenovo','Dell']
// const res = computers.reverse()
// console.log(res)

// slice
// const computers = ['HP','Lenovo','Dell','Mac','Toshiba']
// const res = computers.slice(1,3)
// console.log(res)

// splice
//  const computers = ['HP','Lenovo','Dell','Mac','Toshiba']
//  const res = computers.splice(1,2,'SAMSUNG')
//  console.log(computers) // updated version
//  console.log(res)//the elements that were replaced