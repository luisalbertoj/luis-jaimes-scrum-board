const express = require("express");
const cors = require("cors");
const { conectionDB } = require("./db/db");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
conectionDB();

app.listen(process.env.PORT, () => console.log("Server live, on port: ", process.env.PORT));