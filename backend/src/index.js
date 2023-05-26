const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send('hola mundo');
});

app.get('/api',(req,res)=>{
    res.json({})
})


app.listen(3000,()=>{
    console.log('servidor iniciado');
});
