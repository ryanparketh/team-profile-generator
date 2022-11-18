const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const makeHTML = require('./src/page-template')

const groupMembers = [];

const managerQuestions = [
    {
        type: 'input', 
        name: 'name',
        message: 'what is the managers name?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'name has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'email',
        message: 'what is the managers email?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'email has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'id',
        message: 'what is the managers id?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'id has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'officeNumber',
        message: 'what is the managers office number?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'The office number has to have at least one character'
        }
    },
];

const addMemberQuestion = [
    {
        type: 'list', 
        name: 'choice',
        message: 'What do you want to do?',
        choices: [
            'Engineer', 
            'Intern',
            'Done adding',
        ],
    },
];
function buildManager(){
    inquirer.prompt(managerQuestions).then((managerResponse)=>{
        let mgr = new Manager(
            managerResponse.name,
            managerResponse.email,
            managerResponse.id,
            managerResponse.officeNumber,
        )
        groupMembers.push(mgr);
        addTeamMembers();
    })
}
function addTeamMembers(){
    inquirer.prompt(addMemberQuestion).then((addMemberResponse)=>{
        switch(addMemberResponse.choice){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
            createTeam();
        }
    })
}
const engineerQuestions = [
    {
        type: 'input', 
        name: 'name',
        message: 'what is the engineers name?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'name has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'email',
        message: 'what is the engineers email?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'email has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'id',
        message: 'what is the engineers id?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'id has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'gitHub',
        message: 'what is the engineers gitHub?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'The gitHub has to have at least one character'
        }
    },
];

function addEngineer(){
    inquirer.prompt(engineerQuestions).then((engineerResponse)=>{
        let eng = new Engineer(
            engineerResponse.name,
            engineerResponse.email,
            engineerResponse.id,
            engineerResponse.gitHub,
        )
        groupMembers.push(eng);
        addTeamMembers();
    })
}

const internQuestions = [
    {
        type: 'input', 
        name: 'name',
        message: 'what is the intern name?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'name has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'email',
        message: 'what is the intern email?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'email has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'id',
        message: 'what is the intern id?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'id has to have at least one character'
        }
    },
    {
        type: 'input', 
        name: 'school',
        message: 'what is the interns school?',
        validate: (input)=>{
            if (input !== ''){
                return true;
            }
            return 'The school has to have at least one character'
        }
    },
];

function addIntern(){
    inquirer.prompt(internQuestions).then((internResponse)=>{
        let int = new Intern(
            internResponse.name,
            internResponse.email,
            internResponse.id,
            internResponse.school,
        )
        groupMembers.push(int);
        addTeamMembers();
    })
}
function createTeam(){
    // tbd
    console.log('group members = ', groupMembers);
    fs.writeFileSync(path.join(__dirname,'dist/team.html'),makeHTML(groupMembers), 'utf-8')
}
buildManager();