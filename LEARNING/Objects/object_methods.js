const studentInfo = {
    firstName: 'Benson',
    lastName: 'Thomas',
    birthYear: 1999,
    job: 'Student',
    friends: ['Akhil','Jino','Abin','Bilu'],
    hasDriverLicense: true,

    // here this keyword is used which tells that the function is pointing towards the studentinfo object
    calcAgeWithThis: function(){

    //     // here the below line would print the studentInfo object as this keyword points towards the studentInfo object

        console.log(this);
        return 2021 - this.birthYear;
    },

    calcAge: function (birthYear) {
        return 2021 - birthYear;
    },

    calcAgeModified: function(){
        
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {

        return `${this.firstName} is a ${this.calcAgeModified()} - year old ${this.job} and has ${this.hasDriverLicense? 'a':'no'} drivers license`;
    }
}

console.log(studentInfo.calcAgeWithThis());

console.log(studentInfo.calcAge(1999))
console.log(studentInfo.calcAgeModified());
console.log(studentInfo.age);
console.log(studentInfo.getSummary());
