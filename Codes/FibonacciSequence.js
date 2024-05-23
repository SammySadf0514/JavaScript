let num1 = 0
let num2 = 1
let nextElement
let elementNumber = prompt("Enter the no. of elements in the Fibonacci Series: ")
console.log(`The fibonacci sequence upto ${elementNumber} is ${num1}, ${num2}, `)
for(let i = 3; i <= elementNumber; i++){
    nextElement = num1 + num2
    console.log(nextElement)
    num1 = num2
    num2 = nextElement
}
