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
    sequelize
      .query(
        `SELECT * FROM user_profile WHERE email = '${req.body.email}'
      AND password = '${req.body.password}'`
      )
      .then((dbRes) => {
        console.log(dbRes);
        if (dbRes[0].length === 1) {
          res.status(200).send(dbRes);
          return;
        } else {
          res.status(500).send("username or password incorrect");
        }
      })
      .catch((err) => console.log("loginUser function is erroring", err));
  },
  createPost: (req, res) => {
    const { comment_char } = req.body;
    sequelize
      .query(
        `INSERT INTO post (comment_char)
      VALUES ('${comment_char}') RETURNING *`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log("createPost function is erroring", err));
  },
  getPost: (req, res) => {
    sequelize
      .query("SELECT * FROM post")
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => console.log("getPost function is not working", err));
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    sequelize
      .query(
        `DELETE FROM appointments
      WHERE appt_id = ${+id}; 
      `
      )
      .then((dbRes) => {
        console.log(dbRes);
        res.status(200).send(dbRes[0]);
      })
      .catch((err) =>
        console.log("delete posts function is not working")
      );
  },
};

