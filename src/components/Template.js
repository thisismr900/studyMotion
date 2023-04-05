import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {FcGoogle} from "react-icons/fc"

function Template({title,desc1,desc2,image,formtype,setIsLoggedIn,setIsAccountCreated}) {
  return (
    <div className='flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0 justify-between'>
     
      <div className='w-11/12 max-w-[450px] mx-0'>
        
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] '>
            {title}
        </h1>
        
        <div className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <p className="text-richblack-100">
            {desc1}
          </p>
          <p className="text-blue-100 italic">
            {desc2}
          </p>
        </div>


        {
          formtype === "signup"? 
          (<SignupForm setIsLoggedIn={setIsLoggedIn} setIsAccountCreated={setIsAccountCreated}/>):
          (<LoginForm setIsLoggedIn={setIsLoggedIn}  setIsAccountCreated={setIsAccountCreated}/>)
        }
        
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
        </div>

                {/*  google sign in button */}
        <button>
          <p className='w-full flex justify-center items-center rounded-[8px]
           font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px]
           gap-x-2 mt-6' >
            <FcGoogle/>
            Sign in with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px] mx-auto'>
        <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={584}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
          className='absolute -top-4 right-4'
        />
      </div>
    </div>
  );
}

export default Template