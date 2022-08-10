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
    const { firstname, lastname, user, pw } = req.body;
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
        '${user}', 
        '${pw}'
       ) RETURNING *` 
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
        console.log(dbRes)
        if (dbRes[0].length === 1) {
          res.status(200).send("success"); 
          return
        } else {
          res.status(500).send("username or password incorrect")
        }
        
      })
    .catch((err) => console.log('loginUser function is erroring', err))
  }
};

