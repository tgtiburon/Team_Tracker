const inquirer = require('inquirer');
const fs = require('fs');
// may not need employee since called with any other class
//const Employee = require('Employee.js');
const Manager = require('Manager.js');
const Engineer = require('Engineer.js');
const Intern = require('Intern.js');



const questions = [
    {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
    },
    {
            type: "input",
            name: "id",
            message: "What is the employee's id?"

    }
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"

}



]
/**Function init: collects data with inquirer
 * 
 */
function init() {

    createManager()
        .then(createEmployee)
        .then(teamArray => {
            //make website
        }
        .then(website => {
            //save website
        })
        .catch




}



















// Start the app
init();