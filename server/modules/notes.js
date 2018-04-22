// // saving the things I wrote before this file is for nothing but notes



// <body>
//     <section>
//         <h1>Calculator</h1>
//     </section>
//     <div id='calculatorMain'>
//         <table>
//             <tr>
//                 <td>
//                     <input type='button' class='number' id='inputZero' value=0>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputOne' value=1>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputTwo' value=2>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputThree' value=3>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputFour' value=4>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <input type='button' class='number' id='inputFive' value=5>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputSix' value=6>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputSeven' value=7>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputEight' value=8>
//                 </td>
//                 <td>
//                     <input type='button' class='number' id='inputNine' value=9>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <input type='button' class='calculations' id='addition' value=+>
//                 </td>
//                 <td>
//                     <input type='button' class='calculations' id='subtraction' value=- >
//                 </td>
//                 <td>
//                     <input type='button' class='calculations' id='multiply' value=*>
//                 </td>
//                 <td>
//                     <input type='button' class='calculations' id='divide' value=//>
//                 </td>
//                 <td>
//                     <input type='button' class='calculations' id='equals' value==/>
//                 </td>
//             </tr>
//         </table>
//     </div>
//     <section>
//         <h2 id='total'>Total</h2>
//     </section>
//     <section id=historyTable>
//         <table id='mathTable'>
//             <thead>
//                 <tr>
//                     <th>Math History</th>
//                 </tr>
//             </thead>
//             <tbody id='mathHistory'>
//             </tbody>
//         </table>
//     </section>
// </body>



// // let showTotal = 0;

// // $(document).ready(onReady);

// // function onReady()


// //         $('#inputOne').on('click', oneClickHandler);
// //         $('#inputTwo').on('click', twoClickHandler);
// //         $('#inputThree').on('click', threeClickHandler);

// //         $('#inputFour').on('click', fourClickHandler);
// //         $('#inputFive').on('click', fiveClickHandler);
// //         $('#inputSix').on('click', sixClickHandler);

// //         $('#inputSeven').on('click', sevenClickHandler);
// //         $('#inputEight').on('click', eightClickHandler);
// //         $('#inputNine').on('click', nineClickHandler);

// //         $('#add').on('click', additionClickHandler);
// //         $('#inputZero').on('click', zeroClickHandler);
// //         $('#subtract').on('click', subtractionClickHandler);

// //         $('#multiply').on('click', multiplyClickHandler);
// //         $('#enter').on('click', totalClickHandler);
// //         $('#divide').on('click', divideClickHandler);
// //     // }

// //     // function numTwo() {
// //     //     $('#inputOne').on('click', oneClickHandler);
// //     //     $('#inputTwo').on('click', twoClickHandler);
// //     //     $('#inputThree').on('click', threeClickHandler);
    
// //     //     $('#inputFour').on('click', fourClickHandler);
// //     //     $('#inputFive').on('click', fiveClickHandler);
// //     //     $('#inputSix').on('click', sixClickHandler);
    
// //     //     $('#inputSeven').on('click', sevenClickHandler);
// //     //     $('#inputEight').on('click', eightClickHandler);
// //     //     $('#inputNine').on('click', nineClickHandler);
    
// //     //     $('#add').on('click', additionClickHandler);
// //     //     $('#inputZero').on('click', zeroClickHandler);
// //     //     $('#subtract').on('click', subtractionClickHandler);
    
// //     //     $('#multiply').on('click', multiplyClickHandler);
// //     //     $('#enter').on('click', totalClickHandler);
// //     //     $('#divide').on('click', divideClickHandler);
    
// //     // }
// //     // function mainOperations() {
// //     //     function addNums(); {

// //     //     }
// //     //     function subtractNums(); {

// //     //     }
// //     //     function multiplyNums(); {

// //     //     }
// //     //     function divideNums(); {

// //     //     }

// //     displayTotal();
// // }

// // // functions need to be pushed into an array and then use math function (+-*/) for the total

// // function oneClickHandler() {
// //     let one = 1;
// //     console.log(one);
// // }

// // function twoClickHandler() {
// //     let two = 2;
// //     console.log(two);
// // }

// // function threeClickHandler() {
// //     let three = 3;
// //     console.log(three);
// // }

// // function fourClickHandler() {
// //     let four = 4;
// //     console.log(four);

// // }

// // function fiveClickHandler() {
// //     let five = 5;
// //     console.log(five);
// // }

// // function sixClickHandler() {
// //     let six = 6;
// //     console.log(six);
// // }

// // function sevenClickHandler() {
// //     let seven = 7;
// //     console.log(seven);
// // }

// // function eightClickHandler() {
// //     let eight = 8;
// //     console.log(eight);
// // }

// // function nineClickHandler() {
// //     let nine = 9;
// //     console.log(nine);
// // }



// // function additionClickHandler() {
// //     return numONe + numTwo;
// //     console.log(total);
// // }

// // function zeroClickHandler() {
// //     let zero = 0;
// //     console.log(zero);
// // }

// // function subtractionClickHandler() {
// //     console.log(subtraction);
// // }

// // function multiplyClickHandler() {
// //     console.log(multiply);
// // }

// // function divideClickHandler() {
// //     console.log(divide);
// // }

// // function totalClickHandler() {
// //     const total = {
// //         firstNumber: $('#number').val(),
// //         operator: $('#calculations').val(),
// //         secondNumber: $('#number').val(),
// //         // equals:
// //         // total: 

// //     };
// //     console.log('new total object', total);
// //     $.ajax({
// //         method: 'POST',
// //         url: '/add-to-array',
// //         data: total
// //     })
// //         .then(function (response) {
// //             console.log(response);
// //         });
// // }

// // function getHistory() {
// // $.ajax({
// //     method: 'GET',
// //     url: '/array'
// // })
// //     .then(function (response) {
// //         console.log(response);
// //         // $('mathHistory').empty();
// //         response.forEach(function (newProblem) {
// //             $('mathHistory').prepend(`<tr>
// //              <td>${newProblem.firstNumber}</td>
// //             <td>${newProblem.secondNumber}</td>
// //             <td>${newProblem.operator}</td>
// //         </tr>`);
// //         })
// //     });
// // }

// // function displayTotal() {
// //     console.log('total shows up here');
// //     let showTotal = 0;

// //     $('#total').text(showTotal);
// // }



// // // // I will need a forEach fir mathHistory table to be appended ???


// // // function addNew() {
// // //     const newProblem = {
// // //         firstNumber: $('#oneInput').val(),
// // //         operator: $('#add').addition(),
// // //         secondNumber: $('twoInput').val()
// // //     };
// // //     console.log('new object', newProblem);
// // //     $.ajax({
// // //         method: 'POST',
// // //         url: '/add-to-array',
// // //         data: newProblem
// // //     })
// // //         .then(function (response) {
// // //             console.log(response);
// // //         });
// // //     // getHistory
// // // } // end addNew