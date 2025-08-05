const express = require("express");
const app = express();

const { adminAuth, userAuth } = require("./middlewares/adminAuth");

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

//* Middleware and next()

// We can add multiple router handlers function.
// Use next() to jump to the next function.
// once res.send() "Response sent to client" than on second time it will give an error that  Cannot set headers after they are sent to the client
// So only once res.send should be used but we can use multiple handlers as middleware to use for different functionality.

// app.use(
//   "/home",
//   (req, res, next) => {
//     console.log("home 1");
//     // res.send("Resposne from Home 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Home 2");
//     res.send("Resposne from Home 2");
//     // next();
//   }
// );

app.use("/admin", adminAuth);
app.post("/admin/createUser", (req, res) => {
  console.log("CreateUser Api");
  res.send("User Created");
});

app.get("/admin/users", (req, res) => {
  console.log("All Users API");
  res.send("All Users Data Sent");
});

app.post("/user/login", (req, res) => {
  console.log("User login API");
  res.send("User logged In");
});

// we can directely call middleware as argument to route handle function only with "use" not with get,put or post.

app.use("/users/all", userAuth, (req, res) => {
  console.log("All User API");
  res.send("All user data sent!!!");
});

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    res.status(500).send("Some Error.Contact support");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Here is an error");
  }
});

app.listen(3000, () => {
  console.log("Sever is successfully listening at port 3000");
});
