
import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { BASE_URL, token } from '../../config'
import HashLoader from 'react-spinners/HashLoader'
import {toast} from 'react-toastify'
const FeedbackForm = () => {
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)
    const [reviewText,setReviewText] = useState("")
    const [loading , setLoading] = useState(false)

    const {id} = useParams()

    const handleSubmitReview = async e =>{
        e.preventDefault()
        setLoading(true)
       
        try {
            if(!rating || !reviewText){
                setLoading(true)
                return toast.error('Rating & ReviewText Fields are required')
            }
            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                    method:'post',
                    headers:{
                        'Content-Type':'application/json',
                         Authorization:`Bearer ${token}`   
                    },
                    body:JSON.stringify({rating, reviewText})
                })

                const result = await res.json()

                if(!res.ok){
                    throw new Error(result.message)
                }
                setLoading(false)
                toast.success(result.message)

        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

  return (
    <>
    <form action="">
        <div className="">
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                How would you rate overall experience here?
            </h3>      

            <div className="">
                {[...Array(5).keys()].map((_, index) =>{
                    index += 1;
                    return <button type="button" key={index} 
                        onClick={()=>setRating(index)} onMouseEnter={()=> setHover(index)} onMouseLeave={()=>setHover(rating)}
                        onDoubleClick={()=> {setHover(0); setRating(0)}}
                        className={`${index <+ (hover || rating)  ? 'text-yellowColor ':'text-gray-400'}
                            bg-transparent border-none outline-none text-[22px] cursor-pointer 
                        `}
                        >
                        <span><AiFillStar/></span>
                    </button>
                })}    
            </div>  
        </div>

        <div className="">
             <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                Share your feedback & suggestions
            </h3>   
            <textarea className='border border-solid border-[#0066] focus:outline outline-primaryColor
                w-full px-4 py-3 rounded-md
            ' rows="5" placeholder='Write your message for us...'
                onChange={e => setReviewText(e.target.value)}
            ></textarea>
            <button type='submit' onClick={handleSubmitReview} className='btn'>
                {loading ? <HashLoader size={25} color="#fff"/> : 'Submit Feedback'}
            </button>
        </div>
    </form>
</>
  )
}

export default FeedbackForm