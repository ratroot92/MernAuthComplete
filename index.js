const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//################################################################################################//
//################################################################################################//
//################################################################################################//
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/mernauth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  () => {
    console.log("Mongo DB connected");
  }
);
/*
?
 */
const server = express();
server.use(cookieParser());
server.use(cors());
server.use(express.json());

//
server.use(express.static(path.join(__dirname, "build")));

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//
// server.use(bodyParser.urlencoded({ extended: false }));

//Page not found
// server.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found ",
//   });
// });
/*
! Register Routes Here
*/
const userRouter = require("./routes/user.route");
server.use("/user", userRouter);
//################################################################################################//
//################################################################################################//
//################################################################################################//

//REQUIRE MODELS
const userModel = require("./models/user.model");
// const userInput = {
//   username: "noob",
//   password: "admin",
//   role: "admin",
// };
// const user = new userModel(userInput);
// user.save((err, document) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(document);
//   }
// });

/*
! Server Startup Settings
*/

const PORT = process.env.PORT || "5000";
server.listen(5000, (err) => {
  if (!err) {
    console.log(`NODE SERVER LISTENING ON PORT ${PORT}`);
  }
});
