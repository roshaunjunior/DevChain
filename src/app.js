const express = require("express");
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
app.listen(3000, () => {
  console.log("Sever is successfully listening at port 3000");
});
