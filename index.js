const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

// get method
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({ id, name });
})

// post method
app.post('/addUser', (req, res) => {
    // console.log('data received', req.body)
    // save to database
    const user = req.body;
    user.id = 50;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));