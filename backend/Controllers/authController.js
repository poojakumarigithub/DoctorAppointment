import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

//token generation
const generateToken = user =>{
    return jwt.sign({id:user._id, role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
}


 //register function
export const register = async(req,res)=>{
    const {email,password,name,role,photo,gender} = req.body
    try {
        let user = null;
        if(role === 'patient'){
            user = await User.findOne({email})
        }else if(role ==='doctor'){
            user = await Doctor.findOne({email})
        }

        //check if user exist
        if(user){
            return res.status(400).json({message:"User already exist"})
        }

        //hash psw
        const salt = await bcrypt.genSalt(10)
        const hashPassword =await bcrypt.hash(password,salt)

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

export const login = async (req,res) =>{
    const {email,password} = req.body;
    try {
        let user = null;
        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }
        //check if user alredy exist or not
        if(!user){
            return res.status(404).json({message:"User not founded"})
        }
        //compare psw
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(401).json({status:false,message:"Invalid credentials"})
        }
        //create token
        const token = generateToken(user)
        //const {password,role,appointments,...rest} = user._doc // was not working for login

        const userObj = user.toObject(); // safer
        const { password:userPassword, role, appointments, ...rest } = userObj;  //working for login : js getting confused for password so changed to 'userpassword'


        return res.status(200).json({status:true,message:"Successfully Login",token,data:{...rest},role})
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({status:false,message:"Failed to Login"})
    }
}