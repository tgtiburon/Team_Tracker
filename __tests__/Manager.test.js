const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager("Mark");

    expect(manager.name).toBe('Mark');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    
   

});

test("uses getName() to get the manager's name", () => {
    const manager = new Manager("Mark");

    expect(manager.getName()).toBe('Mark');
   
    

});

test("uses getId() to get the manager's id", () => {
    const manager = new Manager("Mark");

   
    expect(manager.getId()).toEqual(expect.any(Number));
   
    

});

test("uses getEmail() to get the manager's email", () => {
    const manager = new Manager("Mark");

  
    expect(manager.getEmail()).toEqual(expect.any(String));  

});

test("uses getRole() to get the manager's Role", () => {
    // should override 'employee'
    const manager = new Manager("Mark");

   
    expect(manager.getRole()).toBe('Manager');
    

});

