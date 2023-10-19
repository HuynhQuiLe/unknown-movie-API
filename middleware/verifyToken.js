const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("token");
  if (!token)
    return res.status(401).json({ message: "Bạn không có quyền truy cập." });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Mã Token không khả dụng hoặc hết hạn." });
  }
};

module.exports = auth;
