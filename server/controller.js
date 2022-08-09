require("dotenv").config();
const Sequelize = require("sequelize");
// const { formatNamedParameters } = require("sequelize/types/utils");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  createUser: (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    sequelize
      .query(
        `INSERT INTO user_profile (
       firstname, 
       lastname, 
       email, 
       password)
       VALUES (
        '${firstname}',
        '${lastname}',
        '${email}', 
        '${password}'
       )
    
    )`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log("createUsers function is not working", err));
  },
  loginUser: (req, res) => {
    sequelize.query(
      `SELECT * FROM user_profile WHERE email = '${req.body.email}'
      AND password = '${req.body.password}'`
    )
      .then((dbRes) => {
        res.status(200).send("success"); 
      })
    .catch((err) => console.log('loginUser function is erroring', err))
  }
};

