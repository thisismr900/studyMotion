import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function LoginForm({setIsLoggedIn,setAccountCreated}) {
    
        
    const [formData,setFormData]=useState(
        {
            email:"",
            password:""
        }
    )
    const [showPassword,setShowPassword]=useState(false);
        const navigate=useNavigate();


    function changeHandler(event)
    {
        setFormData((prevFormData)=>{
            return{
                ...prevFormData ,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        console.log("setAccountCreated:",setAccountCreated)
        if(setAccountCreated){
            
            //user Account exists in local storage

            const userEmail=localStorage.getItem("userEmail");
            console.log("userEmail is ",userEmail);
            const userPassword=localStorage.getItem("userPassword");
            if(formData.email===userEmail && formData.password=== userPassword)
            {
                navigate("/dashboard");
                setIsLoggedIn(true);
                toast.success("Logged in !");
                console.log("Printing form data");
                console.log(formData);    
            }
            
        }
        else{
            //user Account doesn't exist
            toast.error("No Account Found");
            navigate("/signup");
        }
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address
                <sup className='text-pink-200'>*</sup>
            </p>

            <input
            required
            type='email'
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter your email id'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

        </label>

        <label className='relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sub className='text-pink-200'>*</sub></p>

            <input
            required
            type={showPassword?("text"):("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder='Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span
            className='absolute right-3 top-[38px] cursor-pointer '
             onClick={()=>setShowPassword(prev=>!prev)}>
                {
                    showPassword ?
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
            </Link>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>
            Log In
        </button>



    </form>
  )
}

export default LoginForm