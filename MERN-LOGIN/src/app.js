import express from 'express';
import morgan from 'morgan';
import authRoutes from './rotes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()); //manjear y acceder de forma mas facil a las cookis 
app.use("/api",authRoutes);
export default app;