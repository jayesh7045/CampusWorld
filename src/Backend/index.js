import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();

import connectionToDb from "./DB/db.js";
const port = 5000;

try{
    connectionToDb();

}
catch(err)
{
    console.log("There is an error occured");
    console.log(err);
}
app.get('/', (req, res)=>{
    res.send("Hello guys this is my live project")
})
app.listen(port, ()=>{
    console.log("Server is listening at port "+port);
});