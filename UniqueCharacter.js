let string = prompt("Enter a string")
let isUnique = true
for(let i = 0; i < string.length; i++){
    for(j = i+1; j < string.length; j++){
        if(string[i] == string[j]){
            isUnique = false
            break 
        }
    }
    if(!isUnique){
        break
    }
}   

if(!isUnique){
    console.log("Not any Unique character")
}
else{
    console.log("Unique characters")
}