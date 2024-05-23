let fizz = "Fizz"
let buzz = "Buzz"
let sum = fizz + buzz

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0){
        if( i % 5 == 0){
            console.log(sum)
        }
        else{
            console.log(fizz)
        }
    }
    else if(i % 5 == 0){
        if( i % 3 == 0){
            console.log(sum)
        }
        else{
            console.log(buzz)
        }
    }
    else{
        console.log(i)
    }
}