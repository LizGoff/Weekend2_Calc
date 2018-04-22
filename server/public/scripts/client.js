
$(document).ready(onReady);


function onReady() {
    // $('#addition').on('click', additionClickHandler);
    // $('#subtraction').on('click', subtractionClickHandler);
    // $('#multiply').on('click', multiplyClickHandler);
    // $('#divide').on('click', divideClickHandler);
    $('.calculations').on('click', enterNew);
    // $('#clear').on('click', clearButton);

    getHistory();
}

// function clearButton() {
//     $('#mathHistory').val('');
// }

function additionClickHandler() {
    console.log('addition was clicked')
}

function subtractionClickHandler() {
    console.log('subtraction was clicked')
}

function multiplyClickHandler() {
    console.log('multiply was clicked')
}

function divideClickHandler() {
    console.log('division was clicked')
}

function displayTotal() {
    $.ajax({
        method: 'GET',
        url: '/total-get'

    })
        .then(function (response) {
        console.log(response);
        console.log('display total');
        // return total;
        $('#showTotal').text(response);
    });
}

function enterNew() {
    console.log('total was clicked');
    const newEntry = {
        firstNumber: $('#numOne').val(),
        operator: $(this).val(),
        secondNumber: $('#numTwo').val(),
        equals: '=',
        total: ''
};
    $.ajax({
        method: 'POST',
        url: '/add-to-array',
        data: newEntry
    })
        .then(function (response) {
            console.log(response);
            displayTotal()
            getHistory()
        });
}

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/array'
    })
        .then(function (response) {
            console.log(response);
            $('#mathHistory').empty();
            response.forEach(function (newProblem) {
            $('#mathHistory').prepend(`<tr>
            <td>${newProblem.firstNumber}</td>
            <td>${newProblem.operator}</td>
            <td>${newProblem.secondNumber}</td><td>=</td><td>${newProblem.total}</td>
        </tr>`);
            })
        });
}












// saving some coding below as I am starting over....yet again.



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


// function oneClickHandler() {
//     let one = 1;
//     console.log(one);
// }

// function twoClickHandler() {
//     let two = 2;
//     console.log(two);
// }

// function threeClickHandler() {
//     let three = 3;
//     console.log(three);
// }

// function fourClickHandler() {
//     let four = 4;
//     console.log(four);

// }

// function fiveClickHandler() {
//     let five = 5;
//     console.log(five);
// }

// function sixClickHandler() {
//     let six = 6;
//     console.log(six);
// }

// function sevenClickHandler() {
//     let seven = 7;
//     console.log(seven);
// }

// function eightClickHandler() {
//     let eight = 8;
//     console.log(eight);
// }

// function nineClickHandler() {
//     let nine = 9;
//     console.log(nine);
// }
