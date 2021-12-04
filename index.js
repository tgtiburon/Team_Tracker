const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML');
const { rejects } = require('assert');


const teamArr = [];


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

const createManager = () => {

  //  console.log("Inside createManager()")
    inquirer
    .prompt(managerQuestions)
    .then(managerAnswers => {
       // console.log(managerAnswers);

        managerName = managerAnswers.managerName;
        id = managerAnswers.id;
        email = managerAnswers.email;
        officeNum = managerAnswers.officeNum;
        const manager = new Manager(managerName,id,email,officeNum);

        teamArr.push(manager);

        callMenu();
        
        
    })
    
}



const createEngineer = () => {

    inquirer
        .prompt(allQuestions)
        .then(allAnswers => {
           // console.log(allAnswers);
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

const createIntern = () => {

    inquirer
    .prompt(allQuestions)
    .then(allAnswers => {
       // console.log(allAnswers);
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
            
               // console.table(teamArr);
                callMenu();
            });

    });

    
}
//DEBUG DATA
debugData = [
    {
      name: 'ManagerName',
      id: 7,
      email: 'manager@email.com',
      officeNumber: 77
    },
    {
      name: 'Engineer1',
      id: 2,
      email: 'engineer1@email.com',
      github: 'eng1github'
    },
    {
      name: 'Engineer2',
      id: 4,
      email: 'engineer2@email.com',
      github: 'engineer2github'
    },
    {
      name: 'intern1',
      id: 6,
      email: 'intern1@email.com',
      school: 'MSU'
    },
    {
      name: 'intern2',
      id: 9,
      email: 'intern2@email.com',
      school: 'CMU'
    }
  ];


const callMenu = () => { 
   // console.log("Inside callMenu()");
    inquirer
        .prompt(
            {
                name: "menuChoice",
                type: "list",
                choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish building team"]

            }
        )
        .then(menuAnswer => {

           // console.log(menuAnswer);
            if(menuAnswer.menuChoice === "Engineer") {
            
                createEngineer();
            }
            if(menuAnswer.menuChoice === "Intern") {
          
                createIntern();
            }
            if(menuAnswer.menuChoice === "Finish building team") {
               
                //Generate the webpage and save it
                //Not sure this will work
                
                let webPage = generateHTML(teamArr)
                //debug version below
               // console.log(debugData);
               // let webPage = generateHTML(debugData);
                  
                //console.table(webPage);
                //console.table(debugData);

                //console.log(teamArr);

                //debug
                

                // 
                writeToFile("index.html", webPage);

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