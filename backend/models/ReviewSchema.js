import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/,function(next){
  this.populate({
    path:'user',
    select:'name photo',
  });
  next();
});

// reviewSchema.statics.calcAverageRatings = async function(doctorId){
//   //this point the current review
//   const stats = await this.aggregate([{
//     $match:{doctor:doctorId}
//   },
// {
//   $group:{
//     _id:'$doctor',
//     numOfrating:{$sum:1},
//     avgRating:{$avg:'$rating'}
//   }
// }
// ])
// //console.log(stats)
// await Doctor.findByIdAndUpdate(doctorId,{
//   totalRating:stats[0].numOfrating,
//   averageRating:stats[0].avgRating
// });
// } 

// reviewSchema.post('save',function(){
//   this.constructor.calcAverageRatings(this.doctor)
// })

reviewSchema.statics.calcAverageRatings = async function(doctorId) {
  const stats = await this.aggregate([
    { $match: { doctor: doctorId } },
    {
      $group: {
        _id: '$doctor',
        numOfrating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);

  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: stats[0].numOfrating,
      averageRating: stats[0].avgRating
    });
  } else {
    // No reviews, reset ratings
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: 0,
      averageRating: 0
    });
  }
};


export default mongoose.model("Review", reviewSchema);
