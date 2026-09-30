import fsp from "node:fs/promises";
import path from "node:path";
import z, { boolean, number, string, success } from "zod";
export function validator(data) {
  const userSchema = z.object({
    id: z.number() ,
    name: z.string() ,
    email: z.string() ,
    age: z.number() ,
    isStudent: z.boolean(),
    password: z.string()
  });
  const valid = userSchema.safeParse(data) ;
  if(!valid.success){
    console.log(valid.error) ;
    return {
        success : false  ,
        message : "Invalid format"
    }
  }
  return {
    success : true ,
    message : "Valid Format"
  }
}
export async function addUsers(data){
    try{
      let data = await fsp.readFile(path.join(".", "DataBase.json"));
      let dataObj = JSON.parse(data) ;
      dataObj.push(data) ;
      await fsp.writeFile(path.join(".", "DataBase.json") , JSON.stringify(dataObj , null , 2))
    }
    catch(error){
        return(
            {
                success : false ,
                message : "sth wrong happened when reading the file"
            }
        )
    }
}