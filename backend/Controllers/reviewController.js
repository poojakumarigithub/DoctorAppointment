
import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'

//get all reviews
export const getAllReviews = async(req,res) =>{
    try {
        const reviews = await Review.find({})
        res.status(200).json({success:true,message:"successful",data:reviews})
    } catch (error) {
        res.status(404).json({success:false,message:"Not successful"})
    }
};

//create reviews
// create reviews
export const createReview = async (req, res) => {
  // Set doctor and user from route params if not in body
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId; // from authenticate middleware

  try {
    // Create review
    const newReview = new Review(req.body); // ✅ Use Review model here
    const savedReview = await newReview.save();

    // Push review to doctor
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id }
    });

    // Recalculate average rating
    await Review.calcAverageRatings(req.body.doctor);

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


