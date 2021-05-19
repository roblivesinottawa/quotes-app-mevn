const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QuotesRoute = require("./routes/Quotes");

const app = express();

app.use("/quotes", QuotesRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://dbUser:1029384756@cluster1.gskfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("this will be the homepage"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening at localhost:${PORT}`));
