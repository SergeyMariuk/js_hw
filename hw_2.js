// Task_1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
let firstTaskResult = [];

for(key in citiesAndCountries){
    firstTaskResult.push(`${key} - это ${citiesAndCountries[key]}`);
}

console.log(firstTaskResult);

//Task_2
function getArray(){
    const amount = 12;
    let secondTaskResult = [];

    if(amount % 3 === 0){
        let number = amount / 3;
        let unit = 1;
        for(let i = 0; i < number; i++){
            let arr = [];
            for(let j = 1; j <= 3; j++){
                arr.push(unit++);
            }
            secondTaskResult.push(arr);
        }
        return secondTaskResult;
    }else{
        return `${amount} is not multiple of 9`;
    }  
}

console.log(getArray());

// Task_3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    const lang = 'en';
    const day = 7;

    return namesOfDays[lang][day - 1];
}

console.log(getNameOfDay());

// Task_4*
let aSum = [31, 5, 45, 2, 35]
function getSumOfTwoMin(aSum){
    let aMin = [];
    let minNumber = aSum[0];
    for(value of aSum){
        if(value < minNumber) minNumber = value
    }
    aMin.push(minNumber);
    minNumber = aSum[0];
    for(value of aSum){
        if(value < minNumber && value != aMin[0]) minNumber = value
    }
    aMin.push(minNumber);
    return aMin[0] + aMin[1];
}

console.log(getSumOfTwoMin(aSum));

// Task_5**
let aBinary = [1, 0, 1, 0, 1];

function convertToDecimal(aBinary){
    let res = 0;
    
    for(let i = 0; i < aBinary.length; i++){
        let num = 1;
        for(let j = aBinary.length - (aBinary.length - i); j > 0 ; j--){
            if(i === aBinary.length ){
                num = 1;
            }else{
                num *= 2;
            }
        }
        if(aBinary[aBinary.length - 1 - i] === 1){
           res += num; 
        }
    }
    return res;
}

console.log(convertToDecimal(aBinary));