const express = require("express");
const cors = require("cors");
const pg = require("pg");


const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, (req, res) => {
    console.log("server is running at PORt" + process.env.PORT);
})