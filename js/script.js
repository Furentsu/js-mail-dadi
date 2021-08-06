//  MAIL

let mailingList = ["penny01@yahoo.it", "gionni90@gmail.com", "tommy@virgilio.it", "gerry.09@gmail.com", "larry@yahoo.it"];

let input = prompt("Inserisci la tua email");

let login;

for (let i = 0; i < mailingList.length; i++) {
    if (mailingList.includes(input)) {
        login = "La tua email risulta essere nel nostro database. Benvenuto!";
    } else {
        login = "Ti piacerebbe!!!"
    }
}

document.getElementById("login").innerHTML = login;


// DADI




