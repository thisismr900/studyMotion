import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.svg' 
import { toast } from "react-hot-toast";

function Navbar(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;


    // let navigate=useNavigate();

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup - Dashboard- Logout  */}

      <div className="flex items-center gap-x-4">
       
        {/* // iska use kiya taki login condition use kar saku */}
        {
          !isLoggedIn &&
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-700">
                Login
            </button>
          </Link>
        }
        {
            !isLoggedIn &&
          <Link to="/signup">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-700">
                Signup
            </button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/">
            <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("Logged Out!")
                // navigate("/");
            }}
            className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-700">
                Logout
            </button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] 
            rounded-[8px] border border-richblack-700">
                Dashboard
            </button>
          </Link>
        }

      </div>
    </div>
  );
}

export default Navbar;
