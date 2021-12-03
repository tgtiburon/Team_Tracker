const Employee = require('./Employee.js');
class Engineer extends Employee {

    constructor(name,id,email,github) {

        // Call parent constructor
        super(name);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
       //const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitUser);

        
    }

  
    getRole() {
        return 'Engineer'; //I will override this for other types of employees

    }
    getGithub() {
        return this.github;
    }
   
}



module.exports = Engineer;