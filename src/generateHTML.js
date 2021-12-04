

const generateHTML = (data => {

   
    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Tracker</title>
       <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/> -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="nav justify-content-center" >Team Tracker</div>
        </header>
        <div class = "cardHolder d-flex">
            <div class ="cards row justify-content-center">

                ${generateCards(data)}

            </div>

        </div>
      


        <footer class="text-center fixed-bottom">
            <h3>&copy; ${new Date().getFullYear()} by Tony Gendreau </h3>
        </footer>

    </body>

   `
    
     


})
const generateCards = (data) => {
    console.log("In generateCards()")
    console.log(data);

    let i = 0;
    data.forEach(element => {
   
         switch(element.getRole()) {

            case "Manager" : 
            console.log(element.getRole())
            createManagerCard(element);
    
    
    
    
                break;
            case "Engineer" : 
            console.log(element.getRole());
            createEngineerCard(element);
    
    
    
    
                break;
    
    
            default : //Intern
            console.log(element.getRole())
            createInternCard(element);
    
    
        };
        
    });  

};
const createManagerCard = (element) => {

    console.log("Manager:");
    console.table(element);
    return 
}














module.exports = generateHTML;