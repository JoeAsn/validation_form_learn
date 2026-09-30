import express from "express"
const app = express() ;
const port = 8080 ;
app.listen(port , ()=>console.log("the server is listening on port :" , port)) ;