var express = require("express");
var router = express.Router();

var db = require("./connect.js");

// DECLARE MULTER HERE


// COMPLETE THE MIDDLEWARE FUNCTION
const middlewareToken = (req, res, next) => {
  const token = req.query.token;

  next();
};

/* GET ALL FILMS ONLY FOR REQUEST WITH MIDDLEWARE */
router.get("/", function (req, res, next) {

  const query = "SELECT * FROM films";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});



router.get("/get-film", (req, res) => {
  const id = req.query.id;
  // res.send(id);
  const query = "SELECT * FROM films WHERE id = " + id;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

router.get("/get-film/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM films WHERE id = '${id}'`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});


// INSERT FILM USING MULTER HERE
router.post("/insert", (req, res) => {
  // title, genre, image, description
  

});

router.delete("/delete", (req, res) => {
  const data = req.body;
  const query = `delete from films where id = ${data.id}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
