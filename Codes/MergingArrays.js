let arr1 = []
let size1 = prompt("Enter the size of array 1: ")
for(let i = 0; i<size1; i++){
    let input1 = prompt("Enter the value for array 1: ")
    arr1.push(input1)
}
arr1.sort((a, b) => a - b)

let arr2 = []
let size2 = prompt("Enter the size of array 2: ")
for(let i = 0; i<size2; i++){
    let input2 = prompt("Enter the value for array 2: ")
    arr2.push(input2)
}
arr2.sort((a, b) => a - b)

let mergedArray = arr1.concat(arr2)
mergedArray.sort((a, b) => a - b)
console.log(`The array merged is ${mergedArray}`)