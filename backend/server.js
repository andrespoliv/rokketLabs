import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute"

//Express
const server = express();

//Variables de entorno
dotenv.config();

//Conexión con BD
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));


//Middlewares
server.use(bodyParser.json());
server.use("/api/products", productRoute);

//Inicio de servidor
server.listen(5000, ()=>{
    console.log("Server is running...")
})