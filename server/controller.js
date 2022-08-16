require("dotenv").config();
const { default: axios } = require("axios");
const Sequelize = require("sequelize");
// const { formatNamedParameters } = require("sequelize/types/utils");
const { DATABASE_URL } = process.env;
const { NEWS_API_KEY } = process.env;
const { NEWS_URL } = process.env
console.log(DATABASE_URL); 
console.log(NEWS_API_KEY);
// const sequelize = new Sequelize(NEWS_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectedUnauthorized: false,
//     },
    
//   },
// }); 

// module.exports = {
//   getNews: (req, res) => {
    
//   },
// };



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
        `DELETE FROM post
      WHERE id = ${+id}; 
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
  getNews: async (req, res) => {
   await axios
     .get(
       `${NEWS_URL}?access_key=${NEWS_API_KEY}&categories=entertainment&countries=us&keywords=music&sources=tmz&limit=10`
     )
     .then((res) => {
       return res.data.data;
     })
     .then((news) => {
       const newsResult = news.reverse();
       console.log(newsResult);
       res.status(200).send(newsResult);
     })
     .catch((err) => console.log("news function no working", err));
  }, 
  // getSongs: async (req, res) => {
  //   const songs = await axios.get(`${SONG_URL}?X-RapidAPI-Key=${SONG_KEY}&term=kisstherain&locale=en-US&offset=0&limit=5`)
  //     .then((res) => {
  //     return res.data.data;
  //   });
  //   console.log(songs)
  //   const songResult = songs.reverse()
  //   console.log(songResult)
  //   res.status(200).send(songResult)
  // }
};



