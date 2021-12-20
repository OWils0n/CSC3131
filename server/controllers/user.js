import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

//The controllers define how we respond to requests being sent to the backend.
//After being directed to the right funcions by the routes, we create a response to send back


export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const profile = await User.findOne({ email }); //Call findOne() on the mongo model to check for an existing user with this
        //name 

        if (!profile) return res.status(404).json({ message: "No Such user" });

        const passwordCheck = await bcrypt.compare(password, profile.password); //Hashes the entered password and compares with
        // the currently saved hash 

        if (!passwordCheck) return res.status(400).json({ message: "Invalid credentials" });




        const token = jwt.sign({ email: profile.email, id: profile._id }, 'test', { expiresIn: "1h" });
        //Provide the user with a token for authentication once he has logged in 

        res.status(200).json({ result: profile, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong in controller sign in " });
    }
};

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const profile = await User.findOne({ email });
        if (profile) return res.status(400).json({ message: "User already exists" });
        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords dont match" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );

        res.status(201).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Sign Up error" });
        
    }
};