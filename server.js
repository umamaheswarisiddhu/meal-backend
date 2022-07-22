const express=require('express');
const app = express();
const cors=require('cors');
const userRoutes = require('./userRoutes');
require("dotenv").config();
const PORT = process.env.PORT ||5000;
require('./db');
app.use(cors());
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(userRoutes);




app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
}); 