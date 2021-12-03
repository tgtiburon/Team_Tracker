const Employee = require('./Employee.js');
class Intern extends Employee {

    constructor(name,id,email,school) {

         // Call parent constructor
         super(name);

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

        
    }

   
    getRole() {
        return 'Intern'; //I will override this for other types of employees

    }
    getSchool() {
        return this.school;
    }
}



module.exports = Intern;