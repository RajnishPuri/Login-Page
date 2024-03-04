import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Logo from "../assets/Logo.svg";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

   function clickHandler() {
    setIsLoggedIn((prevLoggedIn) => !prevLoggedIn); 
  }

  function handleLogin() {
    if(isLoggedIn){
      navigate('/');
    }
    else{
    navigate('/login'); 
    }
  }

  function signupHandler(){
    navigate('/signup');
  }

  function logoHandler(){
    navigate('/');
  }

  return (
    <>
      <div className="p-9 flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" onClick={logoHandler} className=" hover:cursor-pointer"/>
        </div>
        <div className="">
          <ul className="text-white flex">
            <li className="mr-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <button
            className="p-2 border bg-[#2e2c2c] mr-5 rounded-sm hover:bg-white hover:text-black duration-500"
            onClick={() => {
              // clickHandler();
              handleLogin(); 
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <button className="p-2 border bg-[#2e2c2c] rounded-sm hover:bg-white hover:text-black duration-500" onClick={
            ()=> {signupHandler()}
          }>
            {isLoggedIn ? "Dash Board" : "SignUp"} 
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>
      </Routes>
    </>
  );
}