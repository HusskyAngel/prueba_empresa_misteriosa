import  express from 'express';
import dotenv from 'dotenv'
import loginRouter from './routes/authRoutes.js';

dotenv.config({path:".env"})

var app = express();

const  APP_PORT=process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login',loginRouter);

app.listen(3000,()=>{
    console.log('servidor iniciado en el puerto '+APP_PORT);
});

//module.exports = app;
