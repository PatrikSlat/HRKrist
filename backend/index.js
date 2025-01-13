require("dotenv").config();
const express = require("express"); // Corrected typo
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");


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

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
