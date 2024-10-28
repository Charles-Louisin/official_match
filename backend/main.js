const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.status(400).send("Hello CHARLES!");
})

app.listen(PORT, () => {
    console.log(`L'application est lancee sur le port ${PORT}`);
});