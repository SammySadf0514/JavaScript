let arr = []
let n = prompt("No. of elements in the array:")
for(let i = 1; i <= n; i++){
    arr.push(i)
}
console.log(arr)

let squareArray = arr.map((val) =>{
    return val*val
})
for( i = 0; i < arr.length ; i++){
    console.log(`The square of ${arr[i]} is ${squareArray[i]}`)
}