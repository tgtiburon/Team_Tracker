const Employee = require('./Employee.js');
class Engineer extends Employee {

    constructor(name = '') {

        // Call parent constructor
        super(name);

       // this.name = name;
       // this.id = 1; // temp
       // this.email = "test@gmail.com";
        this.github = "gitHubUserName" // userName
       

        
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
        return 'Engineer'; //I will override this for other types of employees

    }
    getGithub() {
        return this.github;
    }
   
}



module.exports = Engineer;