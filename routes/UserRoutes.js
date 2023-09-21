const express = require("express");
const { v4: uuidv4 } = require("uuid");
const transaction = require("../seeds/seeds_data/transaction");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", (req, res) => {
  //CREATE NEW USER

  //VARIABLES
  const newUser = {
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_pronouns: req.body.user_pronouns,
    contact_phone: req.body.contact_phone,
    name_pronunciation: req.body.name_pronunciation,
    user_icon: req.body.user_icon,
  };

  //DECONSTRUCTING NEW USER
  const {
    user_name,
    user_email,
    user_pronouns,
    contact_phone,
    name_pronunciation,
    user_icon,
  } = newUser;

  //VALIDATION

  //VALIDATION MISSING PROPERTIES IN THE REQUEST BODY
  if (!user_name || !user_email || !contact_phone) {
    return res.status(400).json({
      error: `Empty field. Please make sure to provide email ,user_name and password information`,
    });
  }

  //VALIDATING EMAIL ADDRESS
  if (!user_email.includes("@")) {
    return res.status(400).json({ error: "Invalid Email" });
  }

  //ADDING PROFILE TO DATABASE
  knex("user")
    .insert({ ...newUser, id: uuidv4() })
    .then((data) => {
      // RESPONSE RETURNS 201 IF SUCCESSFUL
      return res.status(201).json({ success: `User Added` });
    })
    //SERVER ERROR
    .catch((err) => {
      return res.status(500).json({ error: `Failed to add user, ${err}` });
    });
});

//GET USER BY PHONE NUMBER

router.get("/:phoneNumber", (req, res) => {
  //VARIABLES
  const phoneNumber = req.params.phoneNumber;

  //RETRIEVING A SINGLE PROFILE FROM THE DATABASE
  knex("user")
    .where("user.contact_phone","like", `%${phoneNumber}%` )
    .select(
      "user_name",
      "user_pronouns",
      "name_pronunciation",
      "contact_phone",
      "user_icon",
    )
    .then((data) => {
      //IF DATA LENGTH RETURNS FALSE, IT MEANS THERE IS NOT USER IF THAT ID
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with phone number: ${phoneNumber} is not found`);
      }
      res.status(200).json(data);
    })
    //SERVER ERROR
    .catch((err) =>
      res.status(400).send({ error: `Error retrieving User, ${err}` })
    );
});

module.exports = router;
