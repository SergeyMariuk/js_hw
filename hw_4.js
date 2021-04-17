// Task_1
class Student{
    constructor(obj){
        this.name = obj['name'];
        this.surname = obj['surname'];
        this.ratingPoint = obj['ratingPoint'];
        this.schoolPoint = obj['schoolPoint'];
        this.course = obj['course'];
        this.id = Student.id++;
        this.isSelfPayment = null;
        Student.listOfStudents.push(this);
        this.sortStudentsList();
        this.setSelfPayment();
    }

    static id = 1;
    static listOfStudents = [];

    sortStudentsList(){
        Student.listOfStudents.sort(function(a,b) {
            return (b['ratingPoint'] - a['ratingPoint']) || (b['schoolPoint'] - a['schoolPoint']);
        });
    }

    setSelfPayment(){
        for(let key in Student.listOfStudents){
            if(key < 5 && Student.listOfStudents[key].ratingPoint >= 800){
                Student.listOfStudents[key].isSelfPayment = false;
            }else{
                Student.listOfStudents[key].isSelfPayment = true;
            }
        }
    }
}

// Task_2*
class CustomString{
    reverse(str){
        let tmpStr = '';
        for(let i = str.length - 1; i >= 0; i--){
            tmpStr += str[i];
        }
        return tmpStr;
    }

    ucFirst(str){
        let tmpStr = '';
        for(let i = 0; i < str.length; i++){
            if(i == 0){
                tmpStr += str[i].toUpperCase();
            }else{
                tmpStr += str[i];
            }
        }
        return tmpStr;
    }

    ucWords(str){
        let tmpStr = '';
        let arreyOfString = str.split(' ');
        for(let i = 0; i < arreyOfString.length; i++){
            if(i != arreyOfString.length - 1){
                tmpStr += this.ucFirst(arreyOfString[i]) + ' ';
            }else{
                tmpStr += this.ucFirst(arreyOfString[i])
            }
        }
        return tmpStr;
    }
}

// Task_3*
class Validator{
    checkIsEmail(emal){
        let result = false;
        let emailParts = emal.split('@');
        if(typeof emal == 'string' && emailParts.length == 2 && emailParts[0].length != 0 && emailParts[1].length != 0) result = true;
        else result = false;
        let secondEmailParts = emailParts[1].split('.');
        if(secondEmailParts.length == 2 && secondEmailParts[0].length != 0 && secondEmailParts[1].length != 0 && (secondEmailParts[0] === 'gmail' || secondEmailParts[0] === 'mail') && (secondEmailParts[1] === 'com' || secondEmailParts[1] === 'ru')) result = true;
        else result = false;
        return result;
    }

    checkIsDomain(domain){
        let result = false;
        let address = domain.split('.');
        if(typeof domain == 'string' && address.length == 2 && address[0].length != 0 && address[1].length != 0 && (address[1] === 'com' || address[1] === 'ua' || address[1] === 'ru')) result = true;
        else result = false;

        return result;

    }
    checkIsDate(data){
        let result = false;
        let dt = data.split('.');
        if(typeof data == 'string' && dt[0].lenght != 0 && Number(dt[0]) >= 1 && Number(dt[0]) <= 31 && dt[1].lenght != 0 && Number(dt[1]) >= 1 && Number(dt[1]) <= 12 && dt[2].length != 0 &&  Number(dt[2]) >= 0)  result = true;
        else result = false;
        
        return result;
    }
}

var validator = new Validator();