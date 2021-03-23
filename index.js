const express = require('express');

const app = express();
/*
// normal function
function rootCall(req, res) {
    res.send('Thank You....')
}
// arrow function
const rootCall = (req, res) => res.send('Thank You....');
app.get('/', rootCall)
*/

app.get('/', (req, res) => {
    res.send('I know how to open node!')
})

app.listen(3000, () => console.log('Listening to port 3000'));