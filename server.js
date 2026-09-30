import express from "express"
import { router } from "./router.js";
const app = express() ;
const port = 8080 ;
app.use(express.json())
app.use((req , res , next)=>{
    console.log("the server is accepting the requests") ;
    next()
})
app.use("/user" , router)
app.use((req , res) =>{
    console.log("you have entered an invalid route")
})
app.listen(port , ()=>console.log("the server is listening on port :" , port)) ;