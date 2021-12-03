const Employee = require('./Employee.js');
class Manager extends Employee {

    constructor(name,id,email,officeNumber) {

         // Call parent constructor
         super(name);

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber; //temp
        
        

        
    }
    getOfficeNumber() {
            return this.officeNumber;
    }

   
    getRole() {
        return 'Manager'; //I will override this for other types of employees

    }
    
}



module.exports = Manager;