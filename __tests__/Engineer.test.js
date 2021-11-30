const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer("Eddy");

    expect(engineer.name).toBe('Eddy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
   

});

test("uses getName() to get the engineer's name", () => {
    const engineer = new Engineer("Eddy");

    expect(engineer.getName()).toBe('Eddy');
   
});

test("uses getId() to get the engineer's id", () => {
    const engineer = new Engineer("Eddy");

   
    expect(engineer.getId()).toEqual(expect.any(Number));
   
    

});

test("uses getEmail() to get the engineer's email", () => {
    const engineer = new Engineer("Eddy");

  
    expect(engineer.getEmail()).toEqual(expect.any(String));  

});

test("uses getRole() to get the engineer's Role", () => {
    // should override 'employee'
    const engineer = new Engineer("Eddy");

   
    expect(engineer.getRole()).toBe('Engineer');
    

});

test("uses getGithub() to get the engineer's Role", () => {
    
    const engineer = new Engineer("Eddy");

   
    expect(engineer.getGithub()).toEqual(expect.any(String));
    

});


