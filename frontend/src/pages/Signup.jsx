import React, { useState } from 'react'
import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.png'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [selectedFile , setSelectedFile] = useState(null)
    const [previewURL , setPreviewURL] = useState("")

    const [formData , setFormData] = useState({
            name:'',
            email:'',
            password:'',
            photo:selectedFile,
            gender:'',
            role:'patient'
        })
    
    const handleInputChange = e=>{
            setFormData({...formData, [e.target.name]:e.target.value})
        }

    const handleFileInputChange = async (event)=>{
        const file = event.target.files[0]
        //later will use cloudnary
       // console.log(file)
    }

    const submitHandler = async event =>{
        event.preventDefault()
    }
  return (
    <section className='px-5 xl:px-0'>
        <div className="max-w-[1170px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Img  */}
                <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                    <figure>
                        <img src={signupImg} className='w-full rounded-l-lg' alt="" />
                    </figure>
                </div>
                {/* Signup form */}
                <div className="rounded-l-lg lg:pl-16 py-10">
                    <h4 className="text-[22px] text-headingColor leading-9 mb-10 font-[bold]">
                        Create an <span className='text-primaryColor'>account</span>
                    </h4>
                    <form onSubmit={submitHandler}>
                        <div className="mb-5">
                            <input type="text" 
                                placeholder='Full Name' 
                                name='name' 
                                value={formData.name}
                                onChange={handleInputChange}
                                className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                 focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                                rounded-md 
                                cursor-pointer
                                 '
                            />
                        </div>
                        <div className="mb-5">
                            <input type="email" 
                                placeholder='Enter your email...' 
                                name='email' 
                                value={formData.email}
                                onChange={handleInputChange}
                                className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                 focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                                rounded-md 
                                cursor-pointer
                                 '
                            />
                        </div>
                        <div className="mb-5">
                            <input type="password" 
                                placeholder='Enter password here...' 
                                name='password' 
                                value={formData.password}
                                onChange={handleInputChange}
                                className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                                 focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                                rounded-md 
                                cursor-pointer
                                 '
                            />
                        </div>

                        <div className="mb-5 flex items-center justify-between">
                            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                                Are you a :
                                <select name="role" 
                                value={formData.role}
                                onChange={handleInputChange}
                                className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                    focus:outline-none
                                '>
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </label>

                            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                                Gender :
                                <select name="gender" 
                                value={formData.gender}
                                onChange={handleInputChange}
                                className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                    focus:outline-none
                                '>
                                    <option value="select">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>

                        <div className="mb-5 flex items-center gap-3">
                            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid 
                                border-primaryColor flex items-center justify-center
                            '>
                                <img src={avatar} alt="" className='w-full rounded-full'/>
                            </figure>

                            <div className="relative w-[160px] h-[50px]">
                                <input 
                                    type="file"
                                    id='customeFile'
                                    name='photo'
                                    onChange={handleFileInputChange}
                                    accept='.jpeg, .png, .wbeps'  
                                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' 
                                    />
                                <label htmlFor="customeFile" className='  top-0 left-0 absolute w-full h-full 
                                    flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                                    bg-[#0066ff46] text-headingColor font-bold rounded-lg  truncate cursor-pointer 
                                '>
                                    Uplaod Photo
                                </label>
                            </div>
                        </div>

                         <div className="mt-7">
                            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] 
                                rounded-lg px-4 py-3'>
                                Sign Up
                            </button>
                            <p className="mt-5 text-textColor text-center">
                                Don't have an account? <Link to='/login' className='ml-1 text-primaryColor font-bold'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Signup