let numberArray = [];

for(let i=0;i<10;i++)
{
    let temp = Math.floor(Math.random() * 900) + 100;
    numberArray[i] = temp;
}

let max = numberArray[0];
let secondMax = numberArray[1];
let min = numberArray[0];
let secondMin = numberArray[1];

for(let i=0;i<10;i++){

    if(numberArray[i]<min){
        secondMin = min;
        min = numberArray[i];
    }
    else {
        if(numberArray[i]<secondMin)
            secondMin = numberArray[i];
    }

    if(numberArray[i]>max){
        secondMax = max;
        max = numberArray[i];
    }
    else {
        if(numberArray[i]>secondMax)
            secondMax = numberArray[i];
    }
}
for(let i=0;i<10;i++)
    console.log(numberArray[i]);
console.log("Second last maximum number is: "+secondMax);
console.log("Second last minimum number is: "+secondMin);