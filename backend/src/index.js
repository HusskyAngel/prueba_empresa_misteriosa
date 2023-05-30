const express = require('express');
import cors from 'cors';

const app =express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log('servidor iniciado');
});
