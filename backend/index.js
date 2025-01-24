require("dotenv").config();
const express = require("express"); // Corrected typo
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const mysql = require('mysql');
const nodemailer = require("nodemailer")

const connection = mysql.createConnection({
  host     : 'ucka.veleri.hr',
  user     : 'fkrstic',
  password : '11',
  database : 'fkrstic'
});
 
connection.connect((err) => {
    if (err){
        console.log("Error occurred while connecting to DB: ", err.stack);
    }
    console.log("Connected to Database")
});


app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.get("/api/random/test", async (req, res) => {
    try {
        const response = await axios.get('https://bible-api.com/data/web/random'); 
        res.json(response.data);
        console.log("Someone fetching !")
        console.log(response.data)
    } catch (error) {
        console.error("Error while Fetching !!!");
        res.status(500).json({ message: "Error while Fetching !!!" });
    }
});

//////// EMAIL.JS CONFIGURATION 
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


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
