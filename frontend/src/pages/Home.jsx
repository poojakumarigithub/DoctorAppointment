import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
    {/* Hero section */}
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className="container">
                <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                    {/* Hero content */}
                    <div>
                        <div className='lg:w-[570px]'>
                            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                                We help paitents , to live a healthy & longer life.
                            </h1>
                            <p className='text__para mt-2'>
                                A modern hospital management site offering appointment booking, 
                                doctor profiles, patient reviews, and essential healthcare services for efficient care.
                            </p>
                            <button className="btn">
                                Book Appointment Now
                            </button>
                        </div>

                        {/* Hero counter */}
                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                            <div>
                                <h2 className='text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]'>
                                    30+
                                </h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Year of Experience.</p>
                            </div>

                            <div>
                                <h2 className='text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]'>
                                    15+
                                </h2>
                                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Clinic's Location.</p>
                            </div>

                            <div>
                                <h2 className='text-[36px] leading-[56px] text-headingColor font-[700] lg:text-[44px] lg:leading-[54px]'>
                                    100%
                                </h2>
                                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Patients Statifaction with us.</p>
                            </div>
                        </div>

                    </div>

                    {/* Hero content */}
                    <div className='flex gap-[30px] justify-end'>
                        <div>
                            <img className='w-full' src={heroImg01} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                            <img className='w-full' src={heroImg03} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        {/* Hero section ends */}

        {/* What we providing  section starts */}

        <section>
            <div className="container">
                <div className='lg:w-[470px] mx-auto'>
                    <h2 className="heading text-center font-[700] text-[44px] text-headingColor">
                        Providing  Services with Latest technology
                    </h2>
                    <p className='text__para text-center'>
                        Take Care of everyone with lot of love & kindness
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

                    <div className='py-[35px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon01} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className=' text-[26px] leading-9 text-center text-headingColor font-[700]'>
                                Find Doctor's as needed.
                            </h2>
                            <p className='text-[16px] leading-7 text-center text-textColor font-[400] mt-4'>
                                Experience compassionate healthcare with advanced technology, personalized services, 
                                and a commitment to patient well-being and satisfaction.
                            </p>
                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid mt-[30px] border-[#181A1E]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none
                            '>
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>      
                            </Link>
                        </div>
                    </div>

                    <div className='py-[35px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon02} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className=' text-[26px] leading-9 text-center text-headingColor font-[700]'>
                                Find a Locaation.
                            </h2>
                            <p className='text-[16px] leading-7 text-center text-textColor font-[400] mt-4'>
                                Locate our clinics easily, access quality healthcare, 
                                and receive support from our dedicated team whenever you need assistance.
                            </p>
                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid mt-[30px] border-[#181A1E]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none
                            '>
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>      
                            </Link>
                        </div>
                    </div>

                    <div className='py-[35px] px-5'>
                        <div className='flex items-center justify-center'>
                            <img src={icon03} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className=' text-[26px] leading-9 text-center text-headingColor font-[700]'>
                                Book appointment today.
                            </h2>
                            <p className='text-[16px] leading-7 text-center text-textColor font-[400] mt-4'>
                                Book your appointment online for fast, convenient access to expert medical care
                                , ensuring your health needs are met promptly.
                            </p>
                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid mt-[30px] border-[#181A1E]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none
                            '>
                                <BsArrowRight className="group-hover:text-white w-6 h-5"/>      
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* What we providing  section ends */}

        {/* about us  section starts */}
        <About/>
        {/* about us  section end */}

        {/* services  section starts */}
        <section>
            <div className="container">
                <div className='xl:w-[470px] mx-auto '>
                    <h2 className="heading text-center">Service's We Provide</h2>
                    <p className="text__para">
                        Comprehensive healthcare services including consultations, 
                        diagnostics, treatments, preventive care, and patient support for all ages.
                    </p>
                </div>
                <ServiceList/>
            </div>
        </section>
        {/* services  section end */}

        {/* features  section start */}
        <section>
            <div className="container">
                <div className='flex items-center justify-between flex-col lg:flex-row'>
                    {/* features content  */}
                     <div className='xl:w-[670px]'> 
                        <h2 className='heading'>Get virtual assistance any time.</h2>
                        <ul className='pl-4'>
                            <li className="text__para">1.Directly connect to doctor online.</li>
                            <li className="text__para">2.Search doctor's as per your need.</li>
                            <li className="text__para">3.Connect to any of the physician.</li>
                        </ul>
                        <Link to='/'><button className="btn">Learn More</button></Link>
                     </div>
                     {/* Feature img */}
                     <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                        <img src={featureImg} className='w-full max-w-[550px]' alt="" />

                        <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                            md:left-5 z-20 p-2 pb-3 lg:pt-4 px-4 lg:pb-[26px] rounded-[10px] 
                            '>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[6px] lg:gap-3">
                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                                        Tue,24
                                    </p>
                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                                        10:00 AM
                                    </p>
                                </div>
                                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
                                    bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]
                                '>
                                    <img src={videoIcon} alt="" />
                                </span>
                            </div>

                            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                                text-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[400] mt-2 lg:mt-4 rounded-full
                            ">
                                Consultation
                            </div>

                            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                <img src={avatarIcon} alt="" />
                                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                                    Josh Williams
                                </h4>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
        {/* features  section end */}

        {/* our great doctors start*/}
        <section>
            <div className="container">
                <div className='xl:w-[470px] mx-auto '>
                    <h2 className="heading text-center">Our Doctor's Team</h2>
                    <p className="text__para">
                        Meet our experienced and compassionate doctors dedicated
                        to providing exceptional care for every patient.
                    </p>
                </div>
                <DoctorList/>
            </div>
        </section>
        {/* our great doctors  ends */}

        {/* faq section starts*/}
        <section>
            <div className="container">
                <div className='flex justify-between gap-[50px] lg:gap-0'>
                    <div className='w-1/2 hidden md:block'>
                        <img src={faqImg} alt="" />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h2 className='heading'>Some Faqs about us!</h2>
                        <FaqList/>
                    </div>
                </div>
            </div>
        </section>
        {/* faq section ends */}

        {/* testimonial section starts */}
        <section>
            <div className="container">
                <div className='xl:w-[470px] mx-auto '>
                    <h2 className="heading text-center">Pateints about us?</h2>
                    <p className="text__para">
                        Patients praise our caring doctors, excellent service, 
                        modern facilities, and the positive impact on their health.
                    </p>
                </div>
                <Testimonial/>
            </div>
        </section>
        {/* testimonial section ends */}


        

    </>
  )
}

export default Home