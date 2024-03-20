let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let input = prompt("Enter the value to be found: ")
input = Number.parseInt(input)
let found = true
for(let i in arr){
    if(arr[i] == input){
        console.log(`The number is found and is at ${i} index in array`)
        found = false
        break
    }
}
if(found == true){
    console.log("The number is not found")
}