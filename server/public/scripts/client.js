
$(document).ready(onReady);


function onReady() {
    $('.calculations').on('click', enterNew);

    getHistory();
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
