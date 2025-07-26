import React from 'react'
import { formatDate } from '../../utils/formatDate';
const DoctorAbout = () => {
  return (
<>
    <div className="">
        <h3 className='text-[20px] leading-[30px] text-headingColor flex items-center gap-2 font-semibold'>
            About of
            <span className='text-[24px] leading-9 font-bold text-irisBlueColor'>Josh William</span>
        </h3>
        <p className="text__para">
            Dr. Josh William is a highly skilled and compassionate surgeon dedicated to 
            providing exceptional patient care. With years of experience, he combines advanced medical 
            expertise with a friendly approach, ensuring every patient feels comfortable and understood. 
            His commitment to excellence and positive outcomes makes him a trusted choice for surgical 
            procedures.
        </p>
    </div>

   <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
            Education
        </h3>

        <ul className="pt-4 md:p-5">
            <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className='text-[15px] leading-6 font-semibold text-irisBlueColor'>
                        {formatDate("01-13-2014")} - {formatDate("01-13-2016")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>

            <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className='text-[15px] leading-6 font-semibold text-irisBlueColor'>
                        {formatDate("12-04-2010")} - {formatDate("01-13-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
   </div>

   <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
            Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formatDate("01-13-2014")} - {formatDate("01-13-2016")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">Senior Surgeon</p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formatDate("01-13-2014")} - {formatDate("01-13-2016")}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">Senior Surgeon</p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
   </div>

</>
  );
};

export default DoctorAbout