let images = [
    "assets/dice1.png",
    "assets/dice2.png",
    "assets/dice3.png",
    "assets/dice4.png",
    "assets/dice5.png",
    "assets/dice6.png"
];

let roll = "assets/diceroll.gif";

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");

let player1num = 0;
let player2num = 0;
let isplayerturn = true;
let numberplay1 = 0;
let numberplay2 = 0;

function checkWinner() {
    if (numberplay1 >= 6 && numberplay2 >= 6) {
        if (player1num > player2num) {
            alert("🎉 Player 1 Wins!! 🎉");
        } else if (player2num > player1num) {
            alert("🎉 Player 2 Wins!! 🎉");
        } else {
            alert("😲 It's a Draw! 😲");
        }
        player1.disabled = true;
        player2.disabled = true;
    }
}

function rolldice(player, image) {
    if ((player === "player1" && !isplayerturn) || (player === "player2" && isplayerturn)) return;
    
    if (player === "player1" && numberplay1 < 6) {
        image1.src = roll;
        setTimeout(() => {
            let randomnum = Math.floor(Math.random() * images.length);
            player1num += (randomnum + 1);
            image1.src = images[randomnum];
            numberplay1++;
            isplayerturn = false;
            checkWinner();
        }, 1000);
    } else if (player === "player2" && numberplay2 < 6) {
        image2.src = roll;
        setTimeout(() => {
            let randomnum = Math.floor(Math.random() * images.length);
            player2num += (randomnum + 1);
            image2.src = images[randomnum];
            numberplay2++;
            isplayerturn = true;
            checkWinner();
        }, 1000);
    }
}

player1.addEventListener("click", function () {
    rolldice("player1", image1);
});

player2.addEventListener("click", function () {
    rolldice("player2", image2);
});
