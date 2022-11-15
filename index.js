const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const groupMembers = [];

const managerQuestions = [
    {
        type: 'input', 
        name: 'name',
        message: 'what is the managers name?',
        validate: (input){
            if (input !== ''){
                return true;
            }
            return 'name has to have at least one character'
        }
    }
]
function buildManager(){
    
}