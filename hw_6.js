// Task_1
const removeUser = (arr, index) => arr.splice(index, 1);

// Task_2
const getAllKeys = obj => Object.keys(obj);

// Task_3
const getAllValues = obj => Object.values(obj);

// Task_4
const insertIntoarr = (obj, id) => {
    let indexAfter =  condidateArr.findIndex((item) => item._id === id);
    condidateArr.splice(indexAfter, 0, obj);
}

// Task_5
class Condidate {
    constructor(obj){
        Object.assign(this, obj)
    }

    state(){
        return this.address.split(',')[2].trim();
    }
}

// Task_6
const getCompanyNames = () => {
    const tmpArr = [];
    condidateArr.forEach(element => {
        if(!tmpArr.includes(element.company)){
            tmpArr.push(element.company);
        }
    });
    return tmpArr;
}

// Task_7
const getUsersByYear = year => {
    const tmpArr = condidateArr.filter(item => Number(item.registered.split('-')[0]) === year);
    return tmpArr.map(item => item._id);    
}

// Task_8
const getCondidatesByUnreadMsg = number => condidateArr.filter(item => (item.greeting).split(' ').includes((number).toString()));

// Task_9
const getCondidatesByGender = (gender) => condidateArr.filter(item => item.gender === gender);

// Task_10*
Array.prototype.customJoin = function(separator = ',') {
    let tmpString = '';
    this.forEach((element, index) => {
        tmpString += element + separator;
    })
    return tmpString.slice(0, (tmpString.length - separator.length));
}

Array.prototype.customReduce = function (callback, accumulator) {
    accumulator = this[0];
    let acm = accumulator;
    for(let i = 1; i < this.length; i++){
        acm = callback(acm, this[i], i, this);
        }
    return acm;
}