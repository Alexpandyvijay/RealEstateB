const express = require('express');
const mongoose = require("mongoose");
const app = require("./app.js");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(()=>(console.log("mongodb database connected successfully")));


app.listen(3500,()=>(console.log("port running successfully in 3500.....")));