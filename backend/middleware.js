const zod = require('zod');
const {createTodoSchema,updateTodoSchema} = require('./validation.js');


const validateCreate = (req,res,next) =>{
  const payload=req.body;
  const parsePayload = createTodoSchema.safeParse(payload);
  if(!parsePayload.success){
    res.status(411).json({
      msg:"You have sent wrong inputs"
    })
    return;
  }
  else{
    next();
  }

}

const validateUpdate = (req,res,next) =>{
  const payload=req.body;
  const parsePayload = updateTodoSchema.safeParse(payload);
  if(!parsePayload.success){
    res.status(411).json({
      msg:"You have sent wrong inputs"
    })
    return;
  }
  else{
    next();
  }

}

module.exports = {
  validateCreate,
  validateUpdate
}
