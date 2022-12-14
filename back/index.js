const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./rotes/index.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Api started!!!")
});

(async () => {
    try {
        mongoose.connect(
            "mongodb+srv://danil:mongopwd123@cursuch.ejcdxwa.mongodb.net/?retryWrites=true&w=majority",
            { useUnifiedTopology: true, useNewUrlParser: true },
            function (err) {
                if (err) return console.log(err);
                app.listen("5000", () => console.log(`Server started on port: 5000`));
            });
    } catch (e) {
        console.log(e);
    }
}
)()

module.exports = app;