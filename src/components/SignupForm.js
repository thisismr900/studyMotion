
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}) {
    const navigate=useNavigate();

    const [formData,setFormData]=useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""

        })

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]=useState("student");

    function changeHandler(event)
    {
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    // const submitHandler=(event)=> {
    //   event.preventDefault();
    //   console.log("printing submitted items ", event.target);
    //   console.log(formData.password,formData.confirmPassword);
    //   if (formData.password!==formData.confirmPassword) {
    //     console.log(1);
    //     setFormData({
    //       password: "",
    //       confirmPassword: "",
    //     });
    //   }
    //   else{
    //   //user logged in
    //   console.log(2);
    //   setIsLoggedIn(true);
    //   toast.success("Account Created");
    //   const accountData = {
    //     ...formData,
    //   };
    //   const finalData = {
    //     ...accountData,
    //     accountType,
    //   };
    //   console.log("printing account data", finalData);
    //   navigate("/dashboard");
    // }
    // }

    function submitHandler(event){
        event.preventDefault();
        console.log("printing submitted items ",event.target);
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
  
            // setFormData({
            //   password: "",
            //   confirmPassword: "",
            // });

            //dono same kaam kar raha hai
           
            setFormData(p => ({
                ...p,
                password: "",
                confirmPassword: ""
         }))
        }
        else{
            //user logged in 
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData={
                ...formData
            };
            const finalData={
                ...accountData,
                accountType
            }
            console.log("printing account data",finalData);
            navigate("/dashboard");
            
          }
    }
  return (
    <div>
      {/* student-instructor Tab */}

      <div
      className="flex flex-row bg-richblack-800 p-1 my-6 gap-x-1 rounded-full max-w-max">
        <button
        className={`${accountType === "student" ? 
        (" bg-richblack-900 text-richblack-5 ") :
        (" bg-transparent text-richblack-200")}
         py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>{setAccountType("student")}}>
            Student
        </button>
        <button
        className={`${accountType === "instructor" ? 
        (" bg-richblack-900 text-richblack-5 ") :
        (" bg-transparent text-richblack-200")}
         py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>{setAccountType("instructor")}}>
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex justify-between my-4">
        {/* first name */}
          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
            {/* last name */}
          <label >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>

        {/* email add */}
        <label >
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        {/* create password & confirm password */}
        <div className="flex justify-between mt-4">
          <label className='relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            
            />
            <span
             className='absolute right-3 top-[38px] cursor-pointer ' 
             onClick={() => setShowPassword((prev) => !prev)}>
             {
                showPassword ?
                 (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> )
                 :
                 ( <AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
             }
            </span>
          </label>

          <label className='relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            
            />
            <span
            className='absolute right-3 top-[38px] cursor-pointer ' 
            onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {
                showConfirmPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) 
                : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
            </span>
          </label>

        </div>
        <button className='bg-yellow-50 w-full rounded-[8px] font-med text-black px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
