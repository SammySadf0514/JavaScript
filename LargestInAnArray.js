let arr = []
let size =parseInt(prompt("Enter the size of the array"))
for (let i = 0; i < size; i++) {
    let value = parseInt(prompt("Enter the value in array"));
    arr.push(value);
}
let greatest = arr[0]
for(let i = 1; i < arr.length; i++){
    if( arr[i] > greatest){
        greatest = arr[i]
    }
}

console.log(`The greatest among ${arr} is ${greatest}`)