const { TestWatcher } = require('@jest/core');
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern("Ivan");

    expect(intern.name).toBe('Ivan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
   

});

test("uses getName() to get the intern's name", () => {
    const intern = new Intern("Ivan");

    expect(intern.getName()).toBe('Ivan');
   
    

});

test("uses getId() to get the intern's id", () => {
    const intern = new Intern("Ivan");

   
    expect(intern.getId()).toEqual(expect.any(Number));
   
    

});

test("uses getEmail() to get the intern's email", () => {
    const intern = new Intern("Ivan");

  
    expect(intern.getEmail()).toEqual(expect.any(String));  

});

test("uses getRole() to get the intern's Role", () => {
    const intern = new Intern("Ivan");
    // should override to return intern
   
    expect(intern.getRole()).toBe('Intern');
    

});

test("uses getSchool() to get the intern's school", () => {
    const intern = new Intern("Ivan");
    // should override to return intern
   
    expect(intern.getRole()).toEqual(expect.any(String));
    

});