import fsp from "node:fs/promises";
import path from "node:path";
import z, { boolean, number, string, success } from "zod";
export function validator(data) {
  const userSchema = z.object({
    id: z.number(),
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().int().positive().min(18).max(100),
    isStudent: z.boolean(),
    password: z.string().min(8).max(16),
  });
  const valid = userSchema.safeParse(data);
  if (!valid.success) {
    console.log(valid.error);
    return {
      success: false,
      message: "Invalid format",
    };
  }
  return {
    success: true,
    message: "Valid Format",
  };
}
export async function addUsers(data) {
  console.log(data);
  try {
    console.log("add user function is called.");
    let fileData = await fsp.readFile(path.join("DataBase.json"), "utf-8");
    let dataObj = JSON.parse(fileData);
    dataObj.push(data);
    await fsp.writeFile(
      path.join(".", "DataBase.json"),
      JSON.stringify(dataObj, null, 2),
    );
  } catch (error) {
    return {
      success: false,
      message: "sth wrong happened when reading the file",
    };
  }
}
