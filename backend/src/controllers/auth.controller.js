import { sendWelcomeEmail } from "../email/emailHandlers.js";
import User from "../models/user.model.js";
import {generateToken} from "../utils/auth.util.js";
import bcrypt from "bcryptjs";
import { ENV } from "../config/env.js";

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
        const saveUser = await newUser.save();
        generateToken(saveUser._id,res)

        res.status(201)
        .json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            ProfilPic : newUser.ProfilPic
        });

        try{
            await sendWelcomeEmail(saveUser.email, saveUser.fullName,ENV.CLIENT_URL);
        } catch(error){
            console.error("Failed to send welcome message email",error);
        }

    } else {
        res.status(400).json({message:"Invalid user data in try"});
    }

    } catch(error) {
        console.error("Invalid User:",error);
        res.status(400).json({message:"Invalid user data"})
    }

}

export const login = async (req,res) => {
    const {email ,password} = req.body;

    if(!email || !password){
        return res
        .status(400)
        .json({message:"Email and password are required"});
    }

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res
            .status(400)
            .json({
                message : "Invalid credentials"
            });
        }

        generateToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic : user.profilePic
        });

    } catch(error) {
        console.error("Login error:",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const logout = async (req,res) => {
    res.cookie("jwt","",{
        maxAge: 0,
        httpOnly: true
    });
    res.status(200).json({message:"Logout successful"});
}


export const updateProfile = async (req, res) => {
    const userId = req.user._id;
    const { fullName, profilePic } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {
            fullName,
            profilePic
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            email: updatedUser.email,
            profilePic: updatedUser.profilePic
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
