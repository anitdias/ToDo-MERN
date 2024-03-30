const zod = require('zod');
const {createTodoSchema,updateTodoSchema} = require('./validation.js');


const validateCreate = (req,res,next) =>{
  if(!createTodoSchema.safeParse.success){
    res.status(411).json({
      msg:"You have sent wrong inputs"
    })
  }
  else{
    next();
  }

}

const validateUpdate = (req,res,next) =>{
  if(!updateTodoSchema.safeParse.success){
    res.status(411).json({
      msg:"You have sent wrong inputs"
    })
  }
  else{
    next();
  }

}

module.exports = {
  validateCreate,
  validateUpdate
}
