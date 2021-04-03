// Task_1
for (let i = 1; i <= 10; i++){
    if(i % 3 == 0) console.log('FizBuz')
    else if(i % 2 == 0) console.log('Fiz');
    else if(i % 2 != 0) console.log('Buz');
}

// Task_2
let input = 10;
let output = 1;

for (let i = input; i > 0; i--){
    output *= i;
}
console.log(`The factorial of ${input} is ${output}.`);

// Task_3
let sheetsInReamPaper = 500;
let consumptionPerWeek = 1200;
let weeksAmount = 8;
let result;

let totalExpenses = consumptionPerWeek * weeksAmount;
let remainder = totalExpenses % sheetsInReamPaper;
result = (totalExpenses - remainder) / sheetsInReamPaper;
console.log(`The minimum amount of required packs with sheets of paper are ${result}.`);

// Tsak_4*
const roomsOnFlor = 3;
const flors = 9;
const roomNumber = 456;
let porch;
let floor;

let roomsInPorch = roomsOnFlor * flors;
if(roomNumber <= roomsInPorch) porch = 1;
else{
    let remainder = roomNumber % roomsInPorch;
    if(remainder == 0) porch = roomNumber / roomsInPorch;
    else porch = ((roomNumber - remainder) / roomsInPorch) + 1;   
}
let numberRoomsInPreviousPorch;
if(porch != 1) numberRoomsInPreviousPorch = (porch - 1) * roomsInPorch;
else numberRoomsInPreviousPorch = 0;
let numberRoomsInCurrentPorch = roomNumber - numberRoomsInPreviousPorch;
if(numberRoomsInCurrentPorch <= roomsOnFlor) floor = 1;
else{
    let remainder = numberRoomsInCurrentPorch % roomsOnFlor;
    if(remainder == 0) floor = numberRoomsInCurrentPorch / roomsOnFlor;
    else floor = ((numberRoomsInCurrentPorch - remainder) / roomsOnFlor) + 1;
}
console.log(`Porch number is ${porch}, floor number is ${floor}.`);

// Task_5**
const medianNumber = 8;
for(let i = 1; i <= medianNumber; i++){
    result = '';
    for(let j = 1; j < (medianNumber * 2); j++){
        let number = medianNumber - i;
        let diapason = ((medianNumber * 2) - 1) - number;
        if(j  > number && j <= diapason){
            result += '#';
        }else{
            result += '-';
        }
        
        if(j == (medianNumber * 2) - 1){
            result += `  //${i}`;
        }
    }
    console.log(result);
}