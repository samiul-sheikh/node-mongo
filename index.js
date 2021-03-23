const express = require('express');

const app = express();

const users = ['samiul', 'Hasan', 'Nayeem', 'Forhad', 'Susmita', 'Mafruha'];

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

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({ id, name });
})

app.listen(3000, () => console.log('Listening to port 3000'));