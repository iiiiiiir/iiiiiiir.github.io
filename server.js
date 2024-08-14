const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://iiiiiiir.github.io' // Allow requests from your GitHub Pages domain
}));

// API route to handle data submission
app.post('/submit-data', (req, res) => {
    const data = req.body.data;
    if (data) {
        fs.appendFile('data.txt', data + '\n', (err) => {
            if (err) {
                console.error('Failed to save data:', err);
                return res.status(500).send('Failed to save data');
            }
            res.send('Data received and saved');
        });
    } else {
        res.status(400).send('No data provided');
    }
});

// Serve static files if needed
// app.use(express.static(path.join(__dirname, 'client')));

// Catch-all route to serve frontend files if needed
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
