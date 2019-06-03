const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Player = require('./dbSchemas/Player.model');
const db = '';

mongoose.connect(db,{useNewUrlParser:true});

const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/players',(req,res)=>{
    Player.find({}).exec(
        (err,player)=>{
            if(err){
                res.send('error getting players');
            }else{
                console.log(player);
                res.json(player);
            }
        }
    )
})






app.listen(port,()=>{
    console.log('Listening on port '+port);
})