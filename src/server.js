const express = require('express');

const app = express();

app.post('/users', (req, res) => {
    return res.json({ message: "ola mundo"});
})

app.listen(3333);
