import express from "express";
import { validator } from "./service.js";
import { addUsers } from "./service.js";
export async function contoller(req, res) {
  let data = req.body;
  let isValid = validator(data);
  if (isValid.success) {
    try {
      console.log("the user information is valid")
      await addUsers(data);
      console.log("user is added sucessfully")
      res.send("user is added");
      return
    } catch (error) {
        res.send(error)
    }
  }
  res.send("invalid format is given");
}
