const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee("Bob");

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
   

});

test("uses getName() to get the employee's name", () => {
    const employee = new Employee("Bob");

    expect(employee.getName()).toBe('Bob');
   
    

});

test("uses getId() to get the employee's id", () => {
    const employee = new Employee("Bob");

   
    expect(employee.getId()).toEqual(expect.any(Number));
   
    

});

test("uses getEmail() to get the employee's email", () => {
    const employee = new Employee("Bob");

  
    expect(employee.getEmail()).toEqual(expect.any(String));  

});

test("uses getRole() to get the employee's Role", () => {
    const employee = new Employee("Bob");

   
    //expect(employee.getRole()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');
    

});
