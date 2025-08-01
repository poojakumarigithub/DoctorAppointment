
import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async(req,res) =>{
    const id = req.params.id;

    try {
        const updatedUser =  await User.findByIdAndUpdate(id,{$set:req.body}, {new:true})
        res.status(200).json({success:true,message:'Successfully update',data:updatedUser})

    } catch (error) {
        res.status(500).json({success:false,message:'failed to update'})
        
    }
}



export const deleteUser = async(req,res) =>{
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted'})

    } catch (error) {
        res.status(500).json({success:false,message:'failed to delete'})
        
    }
}



export const getSingleUser = async(req,res) =>{
    const id = req.params.id;

    try {
        const user =  await User.findById(id).select("-password")
        res.status(200).json({success:true,message:'user found',data:user})

    } catch (error) {
        res.status(404).json({success:false,message:'no user found'})
        
    }
}

export const getAllUser = async(req,res) =>{
   

    try {
        const users =  await User.find({}).select("-password")
        res.status(200).json({success:true,message:'users found',data:users})

    } catch (error) {
        res.status(404).json({success:false,message:'not found'})
        
    }
}


export const getUserProfile = async(req,res) =>{
    const userId = req.userId
    try {
        const user = await User.findById(userId)

        if(!user){
          return res.status(404).json({success:false,message:'User not found'})
        }

        const {password , ...rest} = user._doc
        res.status(200).json({success:true,message:'getting profile info', data:{...rest}})

    } catch (error) {
        res.status(500).json({success:false,message:'something went wrong, not get info'})
        
    }
} 

export const getMyAppointments = async(req,res) =>{

    try {
        //step1: retrieve appointments from booking for specidfic user
        const bookings = await Booking.find({user:req.userId})

        //step2: extracts doctors id from appointment bookings
        const doctorIds = bookings.map(el => el.doctor.id)

        //step3: retrieve doctors using doctors ids
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password') 
        res.status(200).json({success:true,message:'Appointment info getting..', data:{doctors}})

    } catch (error) {
        res.status(500).json({success:false,message:'something went wrong, not get info'})
    }

}