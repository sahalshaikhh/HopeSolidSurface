const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();




// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// MongoDB setup
mongoose.connect("mongodb://localhost:27017/HopeSolidSurface", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Submission = mongoose.model("Submission", {
    name: String,
    email: String,
    message: String,
});

// Your form submission route
app.post("/api/submit", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create a new submission document in the database
        const submission = new Submission({ name, email, message });
        await submission.save();

        // Respond to the frontend
        res.status(200).json({ message: "Submission successful" });

    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen("5000", (req, res) => {
    console.log('Server is running on port 5000');
});



