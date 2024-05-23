let input = prompt("Enter a number")
let reverse = ""
let size = parseInt(input.length - 1)
for(let i = size; i >= 0; i--){
    reverse = reverse + input[i]
}
if(reverse == input){
    console.log(`${input} is a Palindrome Number`)
}
else{
    console.log(`${input} is not a Palindrome Number`)
}