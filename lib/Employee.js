

class Employee {

    constructor(name = '') {

        this.name = name;
        this.id = 1; // temp
        this.email = "test@gmail.com";

        
    }

    getName() {
        return this.name;

    }
    getId() {
        return this.id;

    }
    getEmail() {
        return this.email;

    }
    getRole() {
        return 'Employee'; //I will override this for other types of employees

    }
}



module.exports = Employee;