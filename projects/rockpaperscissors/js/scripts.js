// get the html wins/ties/losses
const wins = document.querySelector('#wins')
const ties = document.querySelector('#ties')
const losses = document.querySelector('#losses')

// Set their counters
let winsscore = 0
let tiesscore = 0
let lossesscore = 0

// computer's choice
function vscomp(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    comproll = Math.floor(Math.random() * (max - min + 1) + min);
  }

// rock
function rock() {
    vscomp(1,3);
    if(comproll == 1) {
        console.log('tie');
        tiesscore++;
        console.log(tiesscore);
        ties.innerText = tiesscore;
        alert('computer also chose rock, tie.')
    }
    else if(comproll == 2) {
        console.log('loss');
        lossesscore++;
        console.log (lossesscore);
        losses.innerText = lossesscore;
        alert('computer chose paper, loss.')
    }
    else if(comproll == 3) {
        console.log('win');
        winsscore++;
        console.log (winsscore);
        wins.innerText = winsscore;
        alert('computer chose scissors, win!')
    };
}

// paper
function paper() {
    vscomp(1,3);
    if(comproll == 1) {
        console.log('win');
        winsscore++;
        console.log (winsscore);
        wins.innerText = winsscore;
        alert('computer chose rock, win!')
    }
    else if(comproll == 2) {
        console.log('tie');
        tiesscore++;
        console.log(tiesscore);
        ties.innerText = tiesscore;
        alert('computer also chose paper, tie.')
    }
    else if(comproll == 3) {
        console.log('loss');
        lossesscore++;
        console.log (lossesscore);
        losses.innerText = lossesscore;
        alert('computer chose scissors, loss.')
    };
}

// scissors
function scissors() {
    vscomp(1,3);
    if(comproll == 1) {
        console.log('loss');
        lossesscore++;
        console.log (lossesscore);
        losses.innerText = lossesscore;
        alert('computer chose rock, loss.')
    }
    else if(comproll == 2) {
        console.log('win');
        winsscore++;
        console.log (winsscore);
        wins.innerText = winsscore;
        alert('computer chose paper, win!')
    }
    else if(comproll == 3) {
        console.log('tie');
        tiesscore++;
        console.log(tiesscore);
        ties.innerText = tiesscore;
        alert('computer also chose scissors, tie.')
    };
}