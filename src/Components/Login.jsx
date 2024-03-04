import pic from '../assets/frame.png';
import pic2 from '../assets/login.png';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function Login() {
    const [details, setDetails] = useState({ email: "", pass: "" });
    const [loginDetails, setLogin] = useState(false);

    function valHandler(e)
    {
        setDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();

    function signinHandler(e) {
        e.preventDefault(); // Prevent form submission
        console.log(details);
        if (!details.email || !details.pass) {
            console.log("Please provide both email and password");
            return; // Exit early if email or password is not provided
        }
    
        if (details.email === "rajnishpuri15@gmail.com" && details.pass === "12345") {
            setLogin((prevLoggedIn) => !prevLoggedIn);
            
            navigate('/dashboard');
        } else {
            console.log("Wrong Pass");
        }
    }

    return (
        <>
            <div className="text-white flex justify-around items-center">
                <div>
                    <h1>Welcome Back!</h1>
                    <h3>Build Skills for Today, Tomorrow, and Beyond.</h3>
                    <h4 className="italic text-cyan-600">Education to Future Proof Your Career</h4>
                    <form className='mt-3'>
                        {/* Email Div */}
                        <div className='mb-2'>
                            <div className='mb-1 font-thin'>
                                <label htmlFor='email'>Email Address</label>
                            </div>
                            <div>
                                <input type="email" className='text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 w-72' name='email' value={details ? details.email : ""} onChange={valHandler} />
                            </div>
                        </div>
                        {/* Password Div */}
                        <div className='mb-2'>
                            <div className='mb-1 font-thin'>
                                <label htmlFor='password'>Password</label>
                            </div>
                            <div>
                                <input type="password" className='text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 w-72' name='pass' value={details ? details.pass : ""} onChange={valHandler} />
                            </div>
                        </div>
                        <div className='flex justify-end w-72 hover:cursor-pointer font-thin text-cyan-400'>
                            <h3>Forget Password</h3>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-col justify-center mt-4 items-center w-72'>
                            <div>
                                <button type="submit" className='border p-2 w-60 rounded-md bg-orange-500 hover:bg-cyan-400 duration-500' onClick={signinHandler}>Sign In</button>
                            </div>
                            <div className='flex items-center mt-3 mb-3 ml-2'>
                                <div className='w-32 h-1 bg-white'></div>
                                <span className='ml-1 mr-1'>OR</span>
                                <div className='w-32 h-1 bg-white'></div>
                            </div>
                            <div>
                                <button className='border p-2 w-60 rounded-md hover:bg-cyan-400'>Sign in with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={pic} width={"400px"} alt="pic-img1" className='relative top-4 left-4' />
                    <img src={pic2} width={"400px"} alt="pic-img2" className='absolute top-32' />
                </div>

            </div>
            <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}
