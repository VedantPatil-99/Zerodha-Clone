import { model } from "mongoose";
import userSchema from "./../schemas/usersSchema.js";

const User = model("User", userSchema);
export default User;
