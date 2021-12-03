const { TestWatcher } = require('@jest/core');
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");
    

    expect(intern.name).toBe('Ivan');
    expect(intern.id).toEqual(22);
    expect(intern.email).toEqual("ivan@gmail.com");
    expect(intern.school).toEqual("MSU");
   

});

test("uses getName() to get the intern's name", () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");

    expect(intern.name).toBe('Ivan');
    
    

});

test("uses getId() to get the intern's id", () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");

   
    expect(intern.id).toEqual(22);
   
   
   
    

});

test("uses getEmail() to get the intern's email", () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");

  
    expect(intern.email).toEqual("ivan@gmail.com");
   

});

test("uses getRole() to get the intern's Role", () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");
    // should override to return intern
   
    expect(intern.getRole()).toBe('Intern');
    

});

test("uses getSchool() to get the intern's school", () => {
    const intern = new Intern("Ivan",22,"ivan@gmail.com", "MSU");
    // should override to return intern
   
    expect(intern.school).toEqual("MSU");
    

});