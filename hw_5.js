// Task_1
const counter = (() => {
    let tmpCounter = 0;
    return (param) => {
        if(!param) return tmpCounter;
        return tmpCounter += param;
    }
})()

// Task_2
const getUpdatedArr = (() => {
    let tmpArr = [];
    return (param) => {
        if(!param && param !== null) return tmpArr = [];
        tmpArr.push(param);
        return tmpArr
    }
})()

// Task_3*
const getTime = (() => {
    let tmpLasTime = null;
    return () => {
        if(!tmpLasTime){
            tmpLasTime = new Date().getTime();
            return 'Enabled';
        }
        tmpDifferent = new Date().getTime() - tmpLasTime;
        tmpLasTime = new Date().getTime();
        return  Math.floor(tmpDifferent / 1000);
    }
})()

// Task_4*
const oneSec = 1000;

const parsTime = (sec) => {
    let ss = sec % 60;
    if(ss.toString().length === 1) ss = `0${ss}`;
    let mm = sec < 60 ? 0 : (sec - ss)/60;
    if(mm.toString().length === 1) mm = `0${mm}`;
    return `${mm}:${ss}`;
}

const timer = (sec) => {
    const counter = setInterval(() => {
        sec === 0 ? console.log('Timer End') : console.log(parsTime(sec));
        sec --;
    },
    oneSec
    );
    setTimeout(() => {
        clearInterval(counter);
    },
    (sec + 1) * 1000
    );
}