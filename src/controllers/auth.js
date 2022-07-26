import moment from "moment";
import jwt from "jsonwebtoken";

class AuthController {
  login = async (req, res) => {
    let { body } = req;
    try {
      if (
        body["username"] !== "test@gmail.com" ||
        body["password"] !== "Ascra@123"
      ) {
        return res.send({
          code: 400,
          error: "Invalid Credntials",
        });
      }
      let token = jwt.sign({ userid: body["username"] }, "secretKey", {
        expiresIn: "1d",
      });
      return res.json({
        code: 200,
        error: "Login success.",
        token,
      });
    } catch (error) {
      throw error;
    }
  };

  logout = async (req, res) => {
    try {
      return res.json({
        code: 200,
        message: "Logout Success.",
      });
    } catch (error) {
      throw error;
    }
  };
}
export let authController = new AuthController();
