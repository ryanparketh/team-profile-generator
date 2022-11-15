class Employee {
    constructor(name, id, email) {
   
      this.name = name;
      this.email = email;
      this.id = id;
    }
  
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
  
    // return employees id
    getId() {
      return this.id;
    }

    getRole() {
        return 'Employee';
      }
  }
  
  module.exports = Employee;
  