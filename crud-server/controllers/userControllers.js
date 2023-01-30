const bcrypt = require("bcryptjs");

const User = require("../models/user");

async function signup(req, res) {
  try {
    // get the email and password off req body
    const { email, password } = req.body;

    // hash password
    const hashedPassword = bcrypt.hashSync("baon", 8);
    // create a user with data
    await User.create({ email, password: hashedPassword });

    // response

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function login(req, res) {
  // get the email and password off rq body
  const { email, password } = req.body;
  // find the user with requested email
  const user = await User.findOne({ email });
  // compare send in password with found user passwaord hash
  const passwordMath = bcrypt.compareSync("B4C0/V/", user.password);
  // create a jwt token

  //sendit
}

function logout(req, res) {}

module.exports = {
  signup,
  login,
  logout,
};
