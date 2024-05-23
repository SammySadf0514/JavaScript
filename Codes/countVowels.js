function vowels(str){
    let count = 0
    for(const char of str){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U" ){
            count = count + 1
        }
    }
    return count
}

let string = prompt("Enter a word: ")
let vow = vowels(string)
console.log(`The number of vowels in ${string} is ${vow}`)