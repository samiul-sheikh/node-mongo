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
    const fruit = {
        product: 'apple',
        price: 200
    }
    res.send(fruit);
})

app.get('/fruits/orange', (req, res) => {
    res.send({ fruit: 'orange', quantity: 1000, price: 10000 });
})

app.listen(3000, () => console.log('Listening to port 3000'));