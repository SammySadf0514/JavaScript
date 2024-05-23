let input = prompt("Enter a string")
let reverse = ""
let size = parseInt(input.length - 1)
for(let i = size; i >= 0; i--){
    reverse = reverse + input[i]
}
console.log(reverse)
