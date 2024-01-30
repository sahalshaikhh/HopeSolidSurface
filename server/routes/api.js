const express = require('express');
const router = express.Router();

// Define an endpoint to handle form submissions
router.post('/submitForm', (req, res) => {
    const formData = req.body; // Assuming you're sending form data in the request body

    // Log the form data to the console
    console.log('Form Data Received:', formData);

    // Send a response to the client
    res.status(200).json({ message: 'Form data received successfully!' });
});

module.exports = router;