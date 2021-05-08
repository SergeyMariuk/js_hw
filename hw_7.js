// Task_1
const searchCandidatesByPhoneNumber = phone => {
    const tmpClientArray = [];
    let tmpExpectedPhoneNumber = '';
    for(let i = 0; i < phone.length; i++){
        if(Number(phone.charAt(i)) >= 0 && phone.charAt(i) !== ' ') tmpExpectedPhoneNumber += phone.charAt(i);
    }
    condidateArr.forEach(element => {
        let tmpActualPhoneNumber = '';
        for(let i = 0; i < element['phone'].length; i++){
            if(Number(element['phone'].charAt(i)) >= 0 && element['phone'].charAt(i) !== ' ') tmpActualPhoneNumber += element['phone'].charAt(i);
        }
        if(tmpActualPhoneNumber.includes(tmpExpectedPhoneNumber)){
            tmpClientArray.push(element);
        }
    });
    return tmpClientArray;
}

// Task_2
const getCandidateById = id => {
    let tmpArr = [];
    condidateArr.forEach(element => {
        if(element._id === id) Object.assign(tmpArr, element)
    })
    tmpArr['registered'] = `${tmpArr['registered'].split('-')[2].split('T')[0]}/${tmpArr['registered'].split('-')[1]}/${tmpArr['registered'].split('-')[0]}`;
    return tmpArr;
}