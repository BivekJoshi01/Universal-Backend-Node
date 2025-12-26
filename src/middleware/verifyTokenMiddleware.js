import jwt from "jsonwebtoken";

export const verifyTokenMiddleware = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET missing");
    return res.status(500).json({
      success: false,
      message: "Server configuration error",
    });
  }
  const token = authHeader.split(" ")[1]; // Get the token after 'Bearer '

  try {
    const decoded = jwt.decode(token);
    // const decoded = jwt.verify(token, process.env.JWT_SECRET, {
    //   algorithms: ["HS256"],
    // });
    // console.log("🚀 ~ verifyTokenMiddleware ~ decoded:", decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("🚀 ~ verifyTokenMiddleware ~ error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - invalid token" });
  }
};
