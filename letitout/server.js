const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example route to handle data submission
app.post('/submit-data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

