import  express from 'express';
import dotenv from 'dotenv'
import loginRouter from './routes/authRoutes.js';
import adminRouter from './routes/adminRoutes.js' 

dotenv.config({path:".env"})

var app = express();

const  APP_PORT=process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login',loginRouter);
app.use('/admin',adminRouter)

app.listen(3001,()=>{
    console.log('servidor iniciado en el puerto '+APP_PORT);
});

//module.exports = app;
