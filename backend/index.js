require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

// Database connection
const connection = mysql.createConnection({
    host: "ucka.veleri.hr",
    user: "fkrstic",
    password: "11",
    database: "fkrstic",
});

connection.connect((err) => {
    if (err) {
        console.log("Error occurred while connecting to DB: ", err.stack);
    }
    console.log("Connected to Database");
});

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Test route
app.get("/api/random/test", async (req, res) => {
    try {
        const response = await axios.get("https://bible-api.com/data/web/random");
        res.json(response.data);
        console.log("Someone fetching !");
        console.log(response.data);
    } catch (error) {
        console.error("Error while Fetching !!!");
        res.status(500).json({ message: "Error while Fetching !!!" });
    }
});

// Email configuration
app.post("/api/send-email", async (req, res) => {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hrkrist.help@gmail.com",
            pass: "fbis pfqn pnrr yiur",
        },
    });

    const mailOptions = {
        from: "hrkrist.help@gmail.com",
        to: "hrkrist.help@gmail.com",
        subject: "HRKrist help page",
        text: "user: " + email + "\n" + "poruka: " + message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending failed", error);
        res.status(500).json({ message: "Email sending failed" });
    }
});

// Register route
app.post("/api/db/register", (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).send("All fields (email, password, userName) are required.");
    }

    const query = "INSERT INTO user (email, password, userName) VALUES (?, ?, ?)";
    connection.query(query, [email, password, username], (err, results) => {
        if (err) {
            console.error("Error adding user to database:", err);
            return res.status(500).send("Internal Server Error: Could not register user.");
        } else {
            console.log("User added successfully:", results);
            return res.status(200).send("User registered successfully!");
        }
    });
});

// Login route
app.post("/api/db/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const query = "SELECT * FROM user WHERE email = ? AND password = ?";
    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).json({ success: false, message: "Internal Server Error: Could not process login." });
        }

        if (results.length === 0) {
            // No user found with the provided email and password
            return res.status(401).json({ success: false, message: "Invalid email or password." });
        }

        // User found, login successful
        return res.status(200).json({ success: true, message: "Login successful!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});