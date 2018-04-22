const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// place to connect with files
const totalArray = require('./modules/totalArray');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// get requests like the one below;

app.get('/array', (req, res) => {
    res.send(totalArray);
});

app.get('/total-get', (req, res) => {
    res.send(String(totalArray[totalArray.length-1].total));
});





// post requests like this one seen below;
// don't forget the 200!

app.post('/add-to-array', (req, res) => {
    console.log(req.body);
    total = totalEquals(req.body);
    totalArray.push(total);
    res.sendStatus(200);
});

// math to be calculated on server side

function totalEquals(thing) {
    const total = {
        firstNumber: thing.firstNumber,
        operator: thing.operator,
        secondNumber: thing.secondNumber,
        equals: thing.equals,
        total: thing.total 
        }    
        if (thing.operator == '+') {
            total.total = Number(thing.firstNumber) + Number(thing.secondNumber)
        }
        else if (thing.operator == '-') {
            total.total = Number(thing.firstNumber) - Number(thing.secondNumber)
        }
        else if (thing.operator == '*') {
            total.total = Number(thing.firstNumber) * Number(thing.secondNumber)
        }
        else if (thing.operator == '/') {
            total.total = Number(thing.firstNumber) / Number(thing.secondNumber)
        }
        console.log('new total object', total);
        return total; {
    };
}



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});