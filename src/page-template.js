function makeHTML(teamArray){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createTeamHTMLFragment(teamArray)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}
function createManagerHTMLCard(mgr){
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${mgr.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${mgr.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${mgr.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${mgr.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}
function createEngineerHTMLCard(eng){
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${eng.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${eng.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${eng.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
                <li class="list-group-item">GitHub: ${eng.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
}
function createInternHTMLCard(int){
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${int.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${int.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${int.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></li>
                <li class="list-group-item">School: ${int.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}
function createTeamHTMLFragment(teamArray){
    // tbd

}


module.exports = makeHTML;