// array to build the whole teams literal strings for html
const teamCardsArr = [];

/** 
 * Function generateHTML
 * takes data from inquirer and generates an index.html
 * 
 * @param {*} data 
 * @returns 
 */
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
        <link rel="stylesheet" href= "https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"/>
        <link rel="stylesheet" href= "https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div class="nav justify-content-center p-3" >Team Tracker</div>
        </header>
        <div class = "container justify-content-center col-12 col-md-10 col-lg-9 col-xl-8 mb-5" id="card-holder">
            <div class ="row g-0 justify-content-center mt-5" id="team-cards">

                ${generateCards(data)}

            </div>

        </div>
      


        <footer class="text-center fixed-bottom">
           
            <h3>&copy; ${new Date().getFullYear()} by Tony Gendreau </h3>
        </footer>

    </body>

   `
});

/** Function generateCards()
 * takes the data from inquirer
 * and generates the html cards
 *                      
 * @param {*} data 
 * @returns cardsHTML
 */
const generateCards = (data) => {
   

    data.forEach(worker => {
   

        switch(worker.getRole()) {
            // Uses the role to determine which create**Card to use.
            case "Manager": 
               
                const managerHTML = createManagerCard(worker);
                teamCardsArr.push(managerHTML);
                break;
            case "Engineer":
                const engineerHTML = createEngineerCard(worker);
                teamCardsArr.push(engineerHTML);
                break;
            default:
                const internHTML = createInternCard(worker);
                teamCardsArr.push(internHTML);
                
        }

    });
   // Combine all the teamCardsArr into one array and return it.
    const cardsHTML = teamCardsArr.join('');
  
    return cardsHTML;

};


/**
 * 
 * @param {*} worker 
 * @returns html literal for Manager Card
 */
const createManagerCard = (worker) => {
   // console.log("in createManagerCard: " , worker);
   // console.log(worker);
   

    return `
    <div class="card col-12 col-md-4 col-lg-3 shadow-lg m-2" >
            <div class="card-top px-4 py-2">
                <p class="card-title" id ="name">${worker.name}</p>
                <p class="card-text im im-coffee" id="role">&nbsp;Manager</p>
            </div>
            <div class="card-body px-0">
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id ="id">ID: ${worker.id}</li>
                <li class="list-group-item" id ="email"> Email:<a href ="mailto:${worker.email}">${worker.email}</a> </li>
                <li class="list-group-item" id ="id">Office number: ${worker.officeNumber}</li>

                </ul>


            </div>
    </div>
    
    
    `
};


/**
 * 
 * @param {*} worker 
 * @returns HTML literal for engineerCard
 */
const createEngineerCard = (worker) => {

    return `
    <div class="card col-12 col-md-4 col-lg-3 shadow-lg m-2" >
            <div class="card-top px-4 py-2">
                <p class="card-title" id ="name">${worker.name}</p>
                <p class="card-text fas fa-glasses" id="role">&nbsp;Engineer</p>
            </div>
            <div class="card-body px-0">
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id ="id">ID: ${worker.id}</li>
                <li class="list-group-item" id ="email"> Email:<a href ="mailto:${worker.email}">${worker.email}</a> </li>
                <li class="list-group-item" id ="id">Github:<a href="https://github.com/${worker.github}"target="_blank">${worker.github}</a></li>
             
                </ul>


            </div>
    </div>
    
    
    `
};

/**
 * 
 * @param {*} worker 
 * @returns HTML Literal for internCard
 */
const createInternCard = (worker) => {

    return `
    <div class="card col-12 col-md-4 col-lg-3 shadow-lg m-2" >
            <div class="card-top px-4 py-2">
                <p class="card-title" id ="name">${worker.name}</p>
                <p class="card-text fas fa-user-graduate" id="role">&nbsp;Intern</p>
            </div>
            <div class="card-body px-0">
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id ="id">ID: ${worker.id}</li>
                <li class="list-group-item" id ="email"> Email:<a href ="mailto:${worker.email}">${worker.email}</a> </li>
                <li class="list-group-item" id ="id">School: ${worker.school}</li>

                </ul>


            </div>
    </div>
    
    
    `
};




module.exports = generateHTML;