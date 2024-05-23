let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr = []
newArr.length = arr.length
let d = newArr.length - 1
for(let i = 0; i < arr.length; i++){
    newArr[d - i] = arr[i]
}
console.log(newArr)