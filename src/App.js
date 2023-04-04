import "./App.css";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
// import { useEffect } from "react";

function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);
  // useEffect(()=>
  // {
    // setIsLoggedIn(false);
  // },[])

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <div>
        <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}/>
      </div>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element=
        {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
