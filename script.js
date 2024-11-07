import { log } from "console";
let audioPlayer = document.getElementById("audioPlayer");
let count = 0;

document.getElementById("button-clicker")
    .addEventListener("click", () => {
        count++;
        document.getElementById("counter").innerHTML = count;
        console.log(count);
})


audioPlayer.play();


