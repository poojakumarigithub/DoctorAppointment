import React from 'react'
import {BiMenu} from 'react-icons/bi'
import { useContext } from 'react'
import { authContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Tabs = ({tab, setTab}) => {

    const {dispatch} = useContext(authContext)
    const navigate = useNavigate()

    //logout handle
    const handleLogout = () =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }


  return (
    <div>
        <span className="lg:hidden"><BiMenu className='w-6 h-6 cursor-pointer'/></span>
        <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow 
            items-center h-max rouded-md">
            <button 
                onClick={() => setTab('overview')}
                className={`${tab === 'overview' ? 'bg-indigo-100 text-primaryColor':
                'bg-transparent text-headingColor'
                } w-full mt-0 btn rounded-md`}>
                Overview
            </button>
            <button 
                onClick={() => setTab('appointments')}
                className={`${tab === 'appointments' ? 'bg-indigo-100 text-primaryColor':
                'bg-transparent text-headingColor'
                } w-full mt-0 btn rounded-md`}>
                Appointments
            </button>
            <button 
                onClick={() => setTab('settings')}
                className={`${tab === 'settings' ? 'bg-indigo-100 text-primaryColor':
                'bg-transparent text-headingColor'
                } w-full mt-0 btn rounded-md`}>
                Profile
            </button>

            <div className="w-full mt-[100px]" >
                    <button 
                        onClick={handleLogout}
                        className='w-full bg-[#181A1E] p-3 text-white text-[16px] leading-7 rounded-md'>
                            Logout
                    </button>
                    <button className='w-full bg-red-600 mt-4 text-white p-3 text-[16px] leading-7 rounded-md'>
                        Delete Account
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Tabs