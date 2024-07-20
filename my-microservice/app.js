const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a POST route
app.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);

    // Respond with a success message
    res.status(200).json({
        message: 'Data received successfully',
        data: receivedData
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Microservice listening at http://localhost:${port}`);
});