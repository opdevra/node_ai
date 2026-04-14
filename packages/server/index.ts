import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;


app.get('/',((req:Request, res:Response)=>{
    res.send("Hello, World bun !");
}));

app.listen(PORT, ()=>{
    console.log(`Server is running on port  http://localhost:${PORT}`);
});
