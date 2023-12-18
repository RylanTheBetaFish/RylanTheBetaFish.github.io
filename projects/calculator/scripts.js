// find the text field
let out = document.querySelector('.form')

//keep track of entire calculation
let currentCalc = ''

// display in text field
let currentNo = '';

// function for what happens when a number button is pressed
function buttonPress(btn) {
    if (btn === '1') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '2') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '3') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '4') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '5') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '6') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '7') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '8') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '9') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === '0') {
        currentNo = currentNo + btn;
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === 'clear') {
        currentNo = '';
        console.log(currentNo);
        out.innerText = currentNo;
        currentCalc = '';
    }
    else if (btn === 'back') {
        currentNo = currentNo.substring(0, currentNo.length - 1);
        console.log(currentNo);
        out.innerText = currentNo;
    }
    else if (btn === 'divide') {
        currentCalc = currentCalc + currentNo;
        currentNo = '';
        currentCalc = currentCalc + ' / ';
        out.innerText = currentNo;
    }
    else if (btn === 'times') {
        currentCalc = currentCalc + currentNo;
        currentNo = '';
        currentCalc = currentCalc + ' * ';
        out.innerText = currentNo;
    }
    else if (btn === 'minus') {
        currentCalc = currentCalc + currentNo;
        currentNo = '';
        currentCalc = currentCalc + ' - ';
        out.innerText = currentNo;
    }
    else if (btn === 'plus') {
        currentCalc = currentCalc + currentNo;
        currentNo = '';
        currentCalc = currentCalc + ' + ';
        out.innerText = currentNo;
    }
    else if (btn === 'equals') {
        currentCalc = currentCalc + currentNo;
        console.log(currentCalc)
        currentNo = eval(currentCalc);
        out.innerText = currentNo;
    }
};