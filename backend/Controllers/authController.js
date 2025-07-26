import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
export const register = async(req,res)=>{
    const {email,password,name,role,photo,gender} = req.body
    try {
        let user = null;
        if(role === 'patient'){
            user = User.findOne({email})
        }else if(role ==='doctor'){
            user = Doctor.findOne({email})
        }

        //check if user exist
        if(user){
            return res.status(400).json({message:"User already exist"})
        }

        //hash psw
        const salt = bcrypt.getSalt(10)
        const hashPassword = bcrypt.hash(password,salt)

        if(role === 'patient'){
            user = new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        if(role === 'doctor'){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()
        res.status(200).json({success:true,message:'User created successfully'})

    } catch (error) {
        res.status(500).json({success:true,message:'Error in User Creation'})
    }
}

export const login = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}