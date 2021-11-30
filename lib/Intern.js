const Employee = require('./Employee.js');
class Intern extends Employee {

    constructor(name = '') {

         // Call parent constructor
         super(name);


       // this.name = name;
       // this.id = 1; // temp
      //  this.email = "test@gmail.com";
        this.school = 'tempSchool'

        
    }

    // getName() {
    //     return this.name;

    // }
    // getId() {
    //     return this.id;

    // }
    // getEmail() {
    //     return this.email;

    // }
    getRole() {
        return 'Intern'; //I will override this for other types of employees

    }
    getSchool() {
        return this.school;
    }
}



module.exports = Intern;