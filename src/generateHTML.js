

const generateHTML = (data => {

    // destructure what I need for the page
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        //console.log(element);
        const strRole = employee.getRole();
        console.log(employee.getRole());
        console.log(`role = ${strRole}`);
        
    }


    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Tracker</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <p class="header fixed-top" >Team Tracker</p>
        </header>

        ${generateCards()}


        <footer class=" d-flex justify-content-center">
            <h3 class= "text-dark fixed-bottom d-flex justify-content-center">&copy; ${new Date().getFullYear()} by Tony Gendreau </h3>
        </footer>

    </body>

   `
    
     


})
const generateCards = () => {


}

const makeHead = () => {

  

}












module.exports = generateHTML;