let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]
for(let i = 0; i < arr.length; i++){
    if( i+1 == arr[i]){
    }
    else{
        console.log(`${i + 1} is missing`)
        break
    }
}