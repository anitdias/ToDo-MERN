const express = require('express');
const app = express();
const {validateCreate,validateUpdate} = require('./middleware.js');
const {todo} = require('./database.js');


app.post('/createTodos',validateCreate,async function(req,res){
         let body = req.body;
         await todo.create({
          title: body.title,
          description: body.description
         })
           
  
})

app.get('/listTodos',async function(req,res){
        const listTodos = await todo.find({});

        res.json({
          listTodos
        })
     
})

app.listen(3000);
