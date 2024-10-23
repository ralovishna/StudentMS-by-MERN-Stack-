const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const userModel = require("./Models/user");


app.post("/login", async function (req, res) {
    console.log(req.body);
    const { email, password } = req.body;
  
    const data = await userModel.findOne({ email });
    if (data) {
          if (data.password === password) {
            res.status(200).json({ status: "valid" });
          } else {
            res.status(200).json({ status: "invalid_password" });
          }
    } else {
      res.status(200).json({ status: "invalid_user" });
    }
});

app.listen(3000, function (err) {
  console.log("Server is running");
});