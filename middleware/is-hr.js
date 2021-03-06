import jwt from "jsonwebtoken";

//importing driver model
import User from "../models/users.js";

export const isHr = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  try {
    if (!authHeader) {
      const err = new Error("Not authorized");
      err.statusCode = 401;
      return next(err);
    }
    console.log("run isHr auth header ");
    const token = authHeader.split(" ")[1]; //Authorization header looks like {Authorization: 'Bearer ' + this.props.token}
    let decodedToken;
    decodedToken = jwt.verify(token, process.env.TOKEN_SIGNING_KEY);
    console.log(process.env.TOKEN_SIGNING_KEY);
    if (!decodedToken) {
      const error = new Error("Not Authorized");
      error.statusCode = 401;
      next(error);
    }
    const hr = await User.findOne({
      where: {
        email: decodedToken.email,
        isActive: true,
      },
    });
    if (!hr) {
      const error = new Error("Hr not found");
      error.statusCode = 404;
      next(error);
    }
    if ((!hr, ["dataValues"]["isVerified"])) {
      const error = new Error("Not Verified Hr");
      error.statusCode = 403;
      return next(error);
    }
    req.userId = decodedToken.id;
    req.email = decodedToken.email;
    next();
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
