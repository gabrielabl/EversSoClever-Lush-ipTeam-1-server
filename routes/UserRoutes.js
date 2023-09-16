const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post('/',(req,res)=>{

    //VARIABLES
    const newUser = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_pronouns: req.body.user_pronouns,
        contact_phone: req.body.contact_phone,
        name_pronunciation: req.body.name_pronunciation,
        user_icon: req.body.user_icon
    }
    
    //DECONSTRUCTING NEW USER
    const { user_name, user_email, user_pronouns, contact_phone, name_pronunciation, user_icon} = newUser;

    //VALIDATION

  //VALIDATION MISSING PROPERTIES IN THE REQUEST BODY
  if (!user_name || !user_email || !contact_phone) {
    return res.status(400).json({
      error: `Empty field. Please make sure to provide email ,user_name and password information`,
    });
  };

  //VALIDATING EMAIL ADDRESS
  if (!user_email.includes("@")) {
    return res.status(400).json({ error: "Invalid Email" });
  };

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

} )

module.exports = router;

