const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// place to connect with files
const totalArray = require('./modules/totalArray');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// get requests like the one below;
// app.get('/records', (req, res) => {
//     res.send(recordCollection);
// });

// post requests like this one seen below;
// don't forget the 200!
// app.post('/add-record', (req, res) => {
//     console.log(req.body);
//     recordCollection.push(req.body);
//     res.sendStatus(200);
// });

// math to be calculated on server side

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});