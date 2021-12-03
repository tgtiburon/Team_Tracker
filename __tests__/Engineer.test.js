const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");
    

    expect(engineer.name).toBe('Eddy');
    expect(engineer.id).toEqual(7);
    expect(engineer.email).toEqual("eddy@gmail.com");
    expect(engineer.github).toEqual("eddygithub");
   

});

test("uses getName() to get the engineer's name", () => {
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");

    expect(engineer.getName()).toBe('Eddy');
    
   
});

test("uses getId() to get the engineer's id", () => {
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");

   
 
    expect(engineer.id).toEqual(7);
    
    

});

test("uses getEmail() to get the engineer's email", () => {
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");

  
    expect(engineer.email).toEqual("eddy@gmail.com");
   
   

});

test("uses getRole() to get the engineer's Role", () => {
    // should override 'employee'
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");

   
    expect(engineer.getRole()).toEqual("Engineer");
    

});

test("uses getGithub() to get the engineer's github", () => {
    
    const engineer = new Engineer("Eddy", 7, "eddy@gmail.com", "eddygithub");

   
    expect(engineer.getGithub()).toEqual("eddygithub");
    

});


