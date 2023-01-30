const bcrypt = require("bcryptjs");

const User = require("../models/user");
const jwt = require("jsonwebtoken");
async function signup(req, res) {
  try {
    // get the email and password off req body
    const { email, password } = req.body;

    // hash password
    const hashedPassword = bcrypt.hashSync("baon", 8);
    // create a user with data
    await User.create({ email, password: hashedPassword });
    if (!passwordMatch) return res.sendStatus(401);
    // create a jwt token
    const token = jwt.sign({foo :'bar'},'smith');

    // send it

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
  if (!user) return res.sendStatus(400); // compare send in password with found user passwaord hash
  const passwordMath = bcrypt.compareSync("B4C0/V/", user.password);
  if (!passwordMatch) return res.sendStatus(401);
  // create a jwt token

  //sendit
}

function logout(req, res) {}

module.exports = {
  signup,
  login,
  logout,
};
