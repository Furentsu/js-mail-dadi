// MAIL 

let mailingList = ["penny01@yahoo.it", "gionni90@gmail.com", "tommy@virgilio.it", "gerry.09@gmail.com", "larry@yahoo.it"];

let input = prompt("Inserisci la tua email");

let login = "Ti piacerebbe!!!";

for (let i = 0; i < mailingList.length; i++) {

    if (mailingList[i] == input) {
        login = "La tua email risulta essere nel nostro database. Benvenuto!";
    }

}

document.getElementById("login").innerHTML = login;

// DADI

// let player = Math.floor(Math.random() * 6) + 1;
// console.log(player);

// let computer = Math.floor(Math.random() * 6) + 1;
// console.log(computer);

// let result;

// if (player > computer) {
//     result = "Complimenti, hai vinto!!";
// } else if (player < computer) {
//     result = "Prova ancora..."; 
// } else {
//     result = "Pareggio!";
// }

// document.getElementById("result").innerHTML = result;




