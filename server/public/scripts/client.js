
let showTotal = 0;

$(document).ready(onReady);

function onReady() {
    function numOne() {
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
    }

    function numTwo() {
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
    
    }
    function mainOperations() {
        function addNums(); {

        }
        function subtractNums(); {

        }
        function multiplyNums(); {

        }
        function divideNums(); {
            
        }

    displayTotal();
}

// functions need to be pushed into an array and then use math function (+-*/) for the total

function oneClickHandler() {
    let one = 1;
    console.log(one);
}

function twoClickHandler() {
    let two = 2;
    console.log(two);
}

function threeClickHandler() {
    let three = 3;
    console.log(three);
}

function fourClickHandler() {
    let four = 4;
    console.log(four);

}

function fiveClickHandler() {
    let five = 5;
    console.log(five);
}

function sixClickHandler() {
    let six = 6;
    console.log(six);
}

function sevenClickHandler() {
    let seven = 7;
    console.log(seven);
}

function eightClickHandler() {
    let eight = 8;
    console.log(eight);
}

function nineClickHandler() {
    let nine = 9;
    console.log(nine);
}

function additionClickHandler() {
    console.log(addition);
}

function zeroClickHandler() {
    let zero = 0;
    console.log(zero);
}

function subtractionClickHandler() {
    console.log(subtraction);
}

function multiplyClickHandler() {
    console.log(multiply);
}

function divideClickHandler() {
    console.log(divide);
}

function totalClickHandler() {
    const total = {
        firstNumber: $('#value').val(),
        secondNumber: $('#value').val(),
        operator: $('#calculations').val()
    };
    console.log('new total object', total);
    $.ajax({
        method: 'POST',
        url: '/add-to-array',
        data: newSong
    })
        .then(function (response) {
            console.log(response);
        });
}

function getHistory() {
$.ajax({
    method: 'GET',
    url: '/array'
})
    .then(function (response) {
        console.log(response);
        $('mathHistory').empty();
        response.forEach(function (newProblem) {
            $('mathHistory').append(`<tr>
             <td>${newProblem.firstNumber}</td>
            <td>${newProblem.secondNumber}</td>
            <td>${newProblem.operator}</td>
        </tr>`);
        })
    });
}

function displayTotal() {
    console.log('total shows up here');
    let showTotal = 0;

    $('#total').text(showTotal);
}



// // I will need a forEach fir mathHistory table to be appended ???


// function addNew() {
//     const newProblem = {
//         firstNumber: $('#oneInput').val(),
//         operator: $('#add').addition(),
//         secondNumber: $('twoInput').val()
//     };
//     console.log('new object', newProblem);
//     $.ajax({
//         method: 'POST',
//         url: '/add-to-array',
//         data: newProblem
//     })
//         .then(function (response) {
//             console.log(response);
//         });
//     // getHistory
// } // end addNew