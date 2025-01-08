const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send({ value: 42 });
});

app.listen(3000, () => {});