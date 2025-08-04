import React from 'react'
import {Link} from 'react-router-dom'
const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
        <div className="bg-white p-6 md:mx-auto">
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment done!
                </h3>
                <p className="text-gray-600 my-2">
                    Thanku for the payment online.
                </p>
                <p>Have a great day...</p>
                <div className="py-10 text-center">
                    <Link
                        to='/home'
                        className='px-12 bg-headingColor text-white font-semibold py-3'
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSuccess