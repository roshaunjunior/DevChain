const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdmin = token === "xyz";

  if (!isAdmin) {
    res.status(401).send("UnAuthorized Request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "abc2";
  const isUser = token === "abc";

  if (!isUser) {
    res.status(401).send("UnAuthorized User");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
