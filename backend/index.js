const express = require('express');
const app = express();
const {validateCreate,validateUpdate} = require('./middleware.js');
const {todo} = require('./database.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.post('/createTodos',validateCreate,async function(req,res){
         let body = req.body;
         await todo.create({
          title: body.title,
          description: body.description,
          completed: false
         })
         res.status(200).json({
          msg:'todo added'
        });
           
  
})

app.get('/listTodos',async function(req,res){
        const listTodos = await todo.find({});

        res.json({
          listTodos
        })
     
})

app.put('/completed',validateUpdate,async function(req,res){
  await todo.update({_id:request.body.id},
    {completed:true})


res.json({
  msg:'todo marked as complete'
})

})


app.listen(3000);
