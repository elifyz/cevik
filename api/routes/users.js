var express = require('express');
var router = express.Router();

const Users = require("../db/models/Users");
const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/Enum");

/* GET users listing. */
router.get('/', async(req, res, next) => {
  try{
    let users = await Users.find({});
    res.json(Response.successResponse(users));

  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.Status(errorResponse.code).json(Response.errorResponse(err));
  }
});

router.post("/add", async(req,res) => {
  let body = req.body;
  try{
    if(!body.user_id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Error");

    await Users.create({
      user_id : body.user_id,
      exercise_plan_id : body.exercise_plan_id,
      exercise_date : body.exercise_date
    });

    res.status(Enum.HTTP_CODES.CREATED).json(Response.successResponse({success: true}, Enum.HTTP_CODES.CREATED));
  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

/*
router.post("/update", async(req, res) =>{
  try{
    let body = req.body;
    let updates = {};
    if()
  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});
*/

router.post("/delete", async(req, res) => {
  let body = req.body;

  try{
    let body = req.body;
    if(!body._id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Error");

    await Users.deleteOne({_id: body._id});

    res.json(Response.successResponse({success: true}));


  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

/*

router.post("/register", async(req,res) => {
  let body = req.body;

  try{
    let user = await Users.findOne({});

    if(user){
     return res.sendStatus(Enum.HTTP_CODES.NOT_FOUND);
    }

    if(!body.user_id) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Error");

    await Users.create({
      user_id : body.user_id,
      exercise_plan_id : body.exercise_plan_id,
      exercise_date : body.exercise_date
    });

    res.status(Enum.HTTP_CODES.CREATED).json(Response.successResponse({success: true}, Enum.HTTP_CODES.CREATED));
  }catch(err){
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});
*/

module.exports = router;
