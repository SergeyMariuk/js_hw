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

// Task_2
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