const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

// Query Params

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Talha", lastName: "Roshaun" });
});

// Params

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Talha", lastName: "Tariq" });
});
// app.get("/", (req, res) => {
//   res.send("Hello from / app");
// });
// app.get("/home", (req, res) => {
//   res.send("Hello from home route");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from about");
// });

// We can add multiple router handlers function.
// Use next() to jump to the next function.
// once res.send() "Response sent to client" than on second time it will give an error that  Cannot set headers after they are sent to the client
// So only once res.send should be used but we can use multiple handlers as middleware to use for different functionality.

app.use(
  "/home",
  (req, res, next) => {
    console.log("home 1");
    // res.send("Resposne from Home 1");
    next();
  },
  (req, res, next) => {
    console.log("Home 2");
    res.send("Resposne from Home 2");
  }
);

app.listen(3000, () => {
  console.log("Sever is successfully listening at port 3000");
});
