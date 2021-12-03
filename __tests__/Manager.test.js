const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager("Mark",7,"test@test.com", 77);

    expect(manager.name).toBe('Mark');
    expect(manager.id).toEqual(7);
    expect(manager.email).toEqual("test@test.com");
    expect(manager.officeNumber).toEqual(77);
    
   

});

test("uses getName() to get the manager's name", () => {
    const manager = new Manager("Mark",7,"test@test.com", 77);

    expect(manager.getName()).toBe('Mark');
   
    

});

test("uses getId() to get the manager's id", () => {
    const manager = new Manager("Mark",7,"test@test.com", 77);
   
    expect(manager.getId()).toEqual(7);
   
    

});

test("uses getEmail() to get the manager's email", () => {
    const manager = new Manager("Mark",7,"test@test.com", 77);
  
    expect(manager.getEmail()).toEqual("test@test.com");  

});

test("uses getRole() to get the manager's Role", () => {
    // should override 'employee'
    const manager = new Manager("Mark",7,"test@test.com", 77);

   
    expect(manager.getRole()).toBe('Manager');
    

});

test("uses getOfficeNumber() to get the manager's office number", () => {
    const manager = new Manager("Mark",7,"test@test.com", 77);
  
    expect(manager.getOfficeNumber()).toEqual(77);  
});

