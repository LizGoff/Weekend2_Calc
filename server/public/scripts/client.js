console.log('JS')

let showTotal = 0;

$(document).ready(onReady);
console.log('doc ready');

function onReady() {
    console.log('jquery ready');

    $('#inputOne').on('click', oneClickHandler);
    $('#inputTwo').on('click', twoClickHandler);
    $('#inputThree').on('click', threeClickHandler);
    $('#inputFour').on('click', fourClickHandler);
    $('#inputFive').on('click', fiveClickHandler);
    $('#inputSix').on('click', sixClickHandler);
    $('#inputSeven').on('click', sevenClickHandler);
    $('#inputEight').on('click', eightClickHandler);
    $('#inputNine').on('click', nineClickHandler);
    
    $('#add').on('click', additionClickHandler);
    $('#inputZero').on('click', zeroClickHandler);
    $('#subtract').on('click', subtractionClickHandler);

    $('#multiply').on('click', multiplyClickHandler);
    $('#enter').on('click', totalClickHandler);
    $('#divide').on('click', divideClickHandler);

    displayTotal();
}

// these functions need to be pushed into an array and then use math function (+-*/) for the total

function oneClickHandler() {
    console.log('one clicked');
}

function twoClickHandler() {
    console.log('two clicked');
}

function threeClickHandler() {
    console.log('three clicked');
}

function fourClickHandler() {
    console.log('four clicked');
}

function fiveClickHandler() {
    console.log('five clicked');
}

function sixClickHandler() {
    console.log('six clicked');
}

function sevenClickHandler() {
    console.log('seven clicked');
}

function eightClickHandler() {
    console.log('eight clicked');
}

function nineClickHandler() {
    console.log('nine clicked');
}

function additionClickHandler() {
    console.log('addition clicked');
}

function zeroClickHandler() {
    console.log('zero clicked');
}

function subtractionClickHandler() {
    console.log('subtraction clicked');
}

function multiplyClickHandler() {
    console.log('multiply clicked');
}

function totalClickHandler() {
    console.log('total clicked');
}

function divideClickHandler() {
    console.log('divide clicked');
}

function displayTotal() {
    console.log('total shows up here');
    let showTotal = 0;
    $('#total').text(showTotal);
}

// function addNewInputAddition() {
//     $('#mathHistory').append(`<tr><td>${inputOne}</td><td>${add}</td><td>${inputtwo}</td></tr>`);
// }


// I will need a forEach fir mathHistory table to be appended