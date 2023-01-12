// Student constructor function
function StudentInfo(firstName, lastName, age, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        return this.age;
    };

    this.getInfo = function () {
        this.firstName + this.lastName;
        return `This is student ${this.firstName} ${this.lastName} from the ${this.academy} !`;
    }

    this.getGradesAverage = function () {
        let sum = (1 + 2 + 3 + 4 + 5) / 5;
        return sum;
    }
}

let student1 = new StudentInfo("Ernes", "Canoski", 21, 2001, "SEDC");
console.log(student1);
console.log(student1.getInfo());
console.log(student1.getGradesAverage());

let student2 = new StudentInfo("Stefan", "Gligorov", 27, 1995, "SEDC");
console.log(student2);
console.log(student2.getInfo());
console.log(student2.getGradesAverage());

let student3 = new StudentInfo("Gabriel", "Koskoski", 24, 1998, "Not a student");
console.log(student3);
console.log(student3.getInfo());
console.log(student3.getGradesAverage());


//string
function povikuvanje(a) {
    if (typeof (a) === "string") {
        return true;
    }
}

function checkIfStr(ime){
    let n = [];
    for(let i = 0; i < ime.length; i++) {
        if(povikuvanje(ime[i])){
            n.push(ime[i]);
            
        }
    }
    return n;
}

//number
function num1(br) {
    if (typeof (br) === "number") {
        return true;
    }
}

function checkIfNum(broj){
    let b = [];
    for(let i = 0; i < broj.length; i++) {
        if(povikuvanje(broj[i])){
            b.push(broj[i]);
            
        }
    }
    return b;
}

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
console.log(checkIfStr(test));
console.log(checkIfNum(test));