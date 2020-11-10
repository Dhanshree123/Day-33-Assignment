let numberArray = [];

for(let i=0;i<10;i++)
{
    let temp = Math.floor(Math.random() * 900) + 100;
    numberArray[i] = temp;
}

numberArray.sort();
for(let i=0;i<10;i++)
    console.log(numberArray[i]);

console.log("Second last maximum number is: "+numberArray[8]);
console.log("Second last minimum number is: "+numberArray[1]);