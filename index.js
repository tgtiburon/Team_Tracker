// All the requires to run the app
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML');
const { rejects } = require('assert');


const teamArr = [];

// array for all generic questions
const  allQuestions = [
    {
            type: "input",
            name: "name",
            message: `What is the employee's name?`,
            validate: employeeName => {
                if(employeeName)  {
                    return true;
                }else {
                    console.log("Please enter the employee's name.");
                    return false;
                }
            }
    },
    {
            type: "number",
            name: "id",
            message: "What is the employee's id?",
            validate: employeeId => {
                if(employeeId)  {
                    return true;
                }else {
                    console.log("Please enter the employee's ID number.");
                    return false;
                }
            }

    },
    {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
            validate: employeeEmail => {
                if(employeeEmail)  {
                    return true;
                }else {
                    console.log("Please enter the employee's email address.");
                    return false;
                }
            }

    }
   
]

// array for manager specific questions
const managerQuestions =  [

    {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: managerName => {
                if(managerName)  {
                    return true;
                }else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
    },
    {
            type: "number",
            name: "id",
            message: "What is the manager's id?",
            validate: officeNum => {
                if(officeNum)  {
                    return true;
                }else {
                    console.log("Please enter an office number.");
                    return false;
                }
            }

    },
    {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: officeNum => {
                if(officeNum)  {
                    return true;
                }else {
                    console.log("Please enter an office number.");
                    return false;
                }
            }

    },
    {
            type: "number",
            name: "officeNum",
            message: "What is the manager's office number?(required)",
            validate: officeNum => {
                if(officeNum)  {
                    return true;
                }else {
                    console.log("Please enter an office number.");
                    return false;
                }
            }

    }


]

// array for engineer specific questions
const engineerQuestions =  [
    {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?(required)",
            validate: github => {
                if(github)  {
                    return true;
                }else {
                    console.log("Please enter the engineer's github username.");
                    return false;
                }
            }

    }


]


// array for intern specific questions
const internQuestions =  [
    {
            type: "input",
            name: "schoolName",
            message: "What is the intern's school name?(required)",
            validate: schoolName => {
                if(schoolName)  {
                    return true;
                }else {
                    console.log("Please enter the intern's school name.");
                    return false;
                }
            }

    }


]
/**Function init: collects data with inquirer
 * 
 */
const init = () => {



    // \x1b[32m] = green
    // \x1b[32m] = reset style
    console.log('\x1b[32m',"--------------------------------------------------------");
    console.log("             Welcome to Team Tracker!");
    console.log("\n");
    console.log("Please follow the prompts to fill out your team!");
    console.log('%s\x1b[0m',"--------------------------------------------------------");
    // Start the app by creating the manager
    createManager();
      

}
/**
 * Function used to create the manager object
 */
const createManager = () => {

 
    inquirer
    .prompt(managerQuestions)
    .then(managerAnswers => {
      

        managerName = managerAnswers.managerName;
        id = managerAnswers.id;
        email = managerAnswers.email;
        officeNum = managerAnswers.officeNum;
        const manager = new Manager(managerName,id,email,officeNum);

        teamArr.push(manager);

        callMenu();
        
        
    })
    
}


/**
 * Function used to create as an engineer object
 */
const createEngineer = () => {

    inquirer
        .prompt(allQuestions)
        .then(allAnswers => {
         
            // pull data from answers
            engineerName = allAnswers.name;
            engineerId = allAnswers.id;
            engineerEmail = allAnswers.email;
            inquirer
                .prompt(engineerQuestions)
                .then(engAnswers => {
                    engineerGithub = engAnswers.github;
                    
                    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                
                    teamArr.push(engineer);
            
                  //  console.table(teamArr);

                    callMenu();
                });

        });
        
};
/**
 * Function used to create an intern object
 */
const createIntern = () => {

    inquirer
    .prompt(allQuestions)
    .then(allAnswers => {
      
        // pull data from answers
        internName = allAnswers.name;
        internId = allAnswers.id;
        internEmail = allAnswers.email;
        inquirer
            .prompt(internQuestions)
            .then(internAnswers => {
                internSchool = internAnswers.schoolName;
                
                const intern = new Intern(internName, internId, internEmail, internSchool);
    
                teamArr.push(intern);
                callMenu();
            });

    });

    
}


/**
 * Function used to call which questions to ask, or to end the questions and launch html creation
 */

const callMenu = () => { 
  
    inquirer
        .prompt(
            {
                name: "menuChoice",
                type: "list",
                choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish building team"],
                default: "Finish building team"
            }
        )
        .then(menuAnswer => {

         
            if(menuAnswer.menuChoice === "Engineer") {
            
                createEngineer();
            }
            if(menuAnswer.menuChoice === "Intern") {
          
                createIntern();
            }
            if(menuAnswer.menuChoice === "Finish building team") {
             
         
               
                let webPage = generateHTML(teamArr)
        
                writeToFile("index.html", webPage);

                debugArr = teamArr;
            

            }

        })


}



const writeToFile = (fileName, data)  => {

    return new Promise((resolve,rejects) => {
        fileName = "./dist/" + fileName;
        fs.writeFile(fileName, data, err => {
            // if thre is an error reject the promise
            // will trigger the catch of the promise
            if(err) {
                //return out of function to make sure promise does
                // not accidently resolve
                console.log(err);
                rejects(err);
                return;

            }
            resolve({
                ok:true,
                message:'File created!'
            });
        });


    });

};








// Start the app
init();