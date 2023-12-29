const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute=require("./routes/userRoute")
app.use(express.json());
const cors=require('cors')
app.use(cors());


mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to MongoDB");
    const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });


  app.use(userRoute)


