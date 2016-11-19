const router = require('express').Router();
const db = require("./query_class.js");
//routes that serve the data base and return json


router.post("/users", (req, res) => {
  //this route implies we are looking to insert into users table
  let query = req.body;
  query.table = "users"; //for definition required by db (need to dry up)
  db.insert(query, callback);
});

router.get("/users", (req, res) => {
  //checks to see if xhr was used, this prevents users from
  //accessing the api via its endpoint only
  if(req.xhr) {
    let query = req.query;
    query.table = "users";
    db.getAll(query, callback);
  } else {
    res.redirect("/");
  }
})

router.get("/users/:id", (req, res) => {
  let query = req.query;
  query.table = "users";
  // we can assign the req.params.id to our data object, but as there is no
  // data object being passed in from the ajax call we create an empty one
  //this preserves the formatting required for the database class
  query.data = {};
  query.data.id = req.params.id;
  db.getRow(query, callback);
})

//for the sake of demo and lack of willingness to set up method override
// delete and update methods will be posts for now..

router.post("/users/:id/update", (req, res) => {
  let query = req.body
  query.table = "users";
  query.data.id = req.params.id;
  db.updateRow(query, callback);
})
module.exports = router;

function callback(data) {
  console.log(data);
  console.log("works");
}
