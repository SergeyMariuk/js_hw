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

// Task_3
const sortCandidatesArr = sortBy => {
    const tmpSortArr = [];
    Object.assign(tmpSortArr, condidateArr)
    if(!sortBy) return tmpSortArr;
    if(sortBy === 'asc') return tmpSortArr.sort((a,b) => Number(a['balance'].split('$')[1].split(',')[0] + a['balance'].split('$')[1].split(',')[1]) - Number(b['balance'].split('$')[1].split(',')[0] + b['balance'].split('$')[1].split(',')[1]));
    if(sortBy === 'desc') return tmpSortArr.sort((a,b) => Number(b['balance'].split('$')[1].split(',')[0] + b['balance'].split('$')[1].split(',')[1]) - Number(a['balance'].split('$')[1].split(',')[0] + a['balance'].split('$')[1].split(',')[1]));
}

// Task_4*
const getEyeColorMap = () => {
    const tmpObject = {};
    const color = [];
    condidateArr.forEach(element => {
        if(!color.includes(element.eyeColor)) color.push(element.eyeColor);
    });

    color.forEach(element => {
        const tmpArr = [];
        condidateArr.forEach(candidatElement => {
            if(candidatElement.eyeColor === element) tmpArr.push(candidatElement)
        });
        tmpObject[element] = tmpArr;
    });

    return tmpObject;
}