import User from "../models/user.model.js";
import {generateToken} from "../utils/auth.util.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {
    const {fullName ,email,password} = req.body;
 
    try{
        if(!fullName ||!email || !password){
            return res
            .status(400)
            .json({
                message : "All fields are required"
            });
        }
        if (password.length < 6){
            return res 
            .status(400)
            .json({
                message : "Password must be at least 6 character"
            });
        }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
      .status(400)
      .json(
        { 
            message: "Invalid email format" 
        });
    }
    const user = await User.findOne({email});
    if (user) return res.status(400).json({message:"Email already exists"});
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    
    if(newUser){
        generateToken(newUser._id,res)
        await newUser.save();

        res.status(201)
        .json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            ProfilPic : newUser.ProfilPic
        });

    } else{
        res.status(400).json({message:"Invalid user data in try"});
    }

    } catch(error) {
        console.error("Invalid User:",error);
        res.status(400).json({message:"Invalid user data"})
    }

}

export const login = (req,res) => {
    res.send("Login endpoint");
}

export const logout = (req,res) => {
    res.send("Logout endpoint");
}

