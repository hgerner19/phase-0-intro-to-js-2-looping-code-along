// Code your solutions in this file
const array = ["Guadalupe", "Ollie", "Aki"];
function writeCards(array,word){
    const newArray =[];
    for(let i = 0; i < array.length; i++){
        newArray[i] = (`Thank you, ${array[i]}, for the wonderful ${word} gift!`);
    }
    return newArray;
}

function countDown(n){
    let counter = n;
    while(counter >= 0){
        console.log(counter);
        counter --;
    }
    return counter;

}