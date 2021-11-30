const Employee = require('./Employee.js');
class Manager extends Employee {

    constructor(name = '') {

         // Call parent constructor
         super(name);

      //  this.name = name;
       // this.id = 1; // temp
       // this.email = "test@gmail.com";
        this.officeNumber = 1; //temp

        
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
        return 'Manager'; //I will override this for other types of employees

    }
    
}



module.exports = Manager;