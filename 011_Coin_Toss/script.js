let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flip-button");
let resetButton = document.querySelector("#reset-button");
let flipSound = new Audio('coin.mp3')


// Function for Sound effect 
function playFlipSound() {
    flipSound.play();
}

flipButton.addEventListener("click",function(){
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    console.log("Random number : ",i);

    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        },100);
        heads++;
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        },100);
        tails++
    }

    setTimeout(updateStats, 3000);
    disableButton();
    playFlipSound();
});

// Function for update points
function updateStats(){
    document.querySelector("#head-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tail-count").textContent = `Tails: ${tails}`;
}

// Function for disablebutton
function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false
    }, 3000);
}

// Function for reset
resetButton.addEventListener("click",function(){
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});