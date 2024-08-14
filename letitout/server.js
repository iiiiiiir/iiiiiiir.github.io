const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes
app.use(cors({
    origin: 'https://iiiiiiir.github.io' // GitHub Pages URL
}));


app.post('/submit-data', (req, res) => {
    const data = req.body.data;
    if (data) {
        // Save data (e.g., to a file or database)
        res.send('Data received and saved');
    } else {
        res.status(400).send('No data provided');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});