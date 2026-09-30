import express from "express" ;
import {contoller} from "./controller.js"
export const router = express.Router() ;
router.post("/" , (req , res)=>{
    console.log("the rquest has entered the router.")
    contoller(req ,res)
})