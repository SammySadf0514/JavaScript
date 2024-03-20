let number = parseInt(prompt("Enter a number to check: "))
if( number == 1){
    console.log("1 is neither prime nor composite number!")
}
else if( number > 1){
    for(let i = 2; i < number; i++){
        if( number % i == 0){
            console.log(`${number} is not a prime number`)
            break
        }
        else{
            console.log(`${number} is a prime number.`)
        }
    }
}
else{
    console.log(`${number} is not a prime number.`)
}