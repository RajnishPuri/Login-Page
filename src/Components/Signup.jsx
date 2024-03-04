import { useState, useEffect } from 'react';
import './active.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import pic from '../assets/frame.png';
import pic2 from '../assets/signup.png';

export default function Signup() {
    const [user, setUser] = useState("student");

    useEffect(() => {
        const stuelement = document.getElementById("student");
        const inselement = document.getElementById("instructor");

        if (user === 'student') {
            stuelement.classList.add("active");
            inselement.classList.remove("active");
        } else {
            stuelement.classList.remove("active");
            inselement.classList.add("active");
        }
    }, [user]);

    function handleUserChange(userType) {
        setUser(userType);
    }

    function signupHandler(e){
        e.preventDefault();
    }

    return (
        <>
            <div className=" text-white flex justify-around items-center">
                <div className=' w-96'>
                    <h1 className=' font-bold text-2xl'>Join the million learning to code with StudyNotion for Free!</h1>
                    <h3>Build Skills for Today, Tomorrow, and Beyond.</h3>
                    <h4 className="italic text-cyan-600">Education to Future Proof Your Career</h4>
                    {/* Button Transition */}
                    <div className=' mt-5 border w-fit p-1 flex rounded-full bg-[#211d1d] mb-5'>
                        <div id="student" className='mr-1 p-2'>
                            <button onClick={() => handleUserChange("student")}>Student</button>
                        </div>
                        <div id="instructor" className='p-2'>
                            <button onClick={() => handleUserChange("instructor")}>Instructor</button>
                        </div>
                    </div>

                    {/* forms */}
                    {user === 'student' && (
                        // Student form
                        <div className=' w-[400px]'>
                            <form>
                                {/* name */}
                                <div className='flex'>
                                    {/* first name */}
                                    <div className='mr-3'>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="firsttext" className=' text-white'>First Name</label>
                                        </div>
                                        <div>
                                            <input className=' w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 ' type="text" id='firsttext' />
                                        </div>
                                    </div>
                                    {/* last name */}
                                    <div className=''>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="lasttext" className=' text-white'>Last Name</label>
                                        </div>
                                        <div>
                                            <input className="w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 " type="text" id='lasttext' />
                                        </div>
                                    </div>
                                </div>
                                {/* Email Id */}

                                <div className='mb-3 mt-3'>
                                    <div className='mb-1 font-thin'>
                                        <label htmlFor='email'>Email Address</label>
                                    </div>
                                    <div>
                                        <input type="email" className='text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 w-full ' name='email' />
                                    </div>
                                </div>
                                {/* Password */}
                                <div className='flex'>
                                    {/* pass */}
                                    <div className='mr-3'>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="pass" className=' text-white'>Password</label>
                                        </div>
                                        <div>
                                            <input className=' w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 ' type="password" id='pass' />
                                        </div>
                                    </div>
                                    {/* confirm */}
                                    <div className=''>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="confpass" className=' text-white'>Confirm Password</label>
                                        </div>
                                        <div>
                                            <input className="w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 " type="password" id='confpass' />
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='flex flex-col justify-center mt-8 items-center'>
                            <div>
                                <button type="submit" className='border p-2 w-60 rounded-md bg-orange-500 hover:bg-cyan-400 duration-500' onClick={signupHandler}>Sign In</button>
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
                    )}

                    {user === 'instructor' && (
                        // Instructor form
                        <div className=' w-[400px]'>
                            <form>
                                {/* name */}
                                <div className='flex'>
                                    {/* first name */}
                                    <div className='mr-3'>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="firsttext" className=' text-white'>First Name</label>
                                        </div>
                                        <div>
                                            <input className=' w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 ' type="text" id='firsttext' />
                                        </div>
                                    </div>
                                    {/* last name */}
                                    <div className=''>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="lasttext" className=' text-white'>Last Name</label>
                                        </div>
                                        <div>
                                            <input className="w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 " type="text" id='lasttext' />
                                        </div>
                                    </div>
                                </div>
                                {/* Email Id */}

                                <div className='mb-3 mt-3'>
                                    <div className='mb-1 font-thin'>
                                        <label htmlFor='email'>Email Address</label>
                                    </div>
                                    <div>
                                        <input type="email" className='text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 w-full ' name='email' />
                                    </div>
                                </div>
                                {/* Password */}
                                <div className='flex'>
                                    {/* pass */}
                                    <div className='mr-3'>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="pass" className=' text-white'>Password</label>
                                        </div>
                                        <div>
                                            <input className=' w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 ' type="password" id='pass' />
                                        </div>
                                    </div>
                                    {/* confirm */}
                                    <div className=''>
                                        <div className='mb-1 font-thin'>
                                            <label htmlFor="confpass" className=' text-white'>Confirm Password</label>
                                        </div>
                                        <div>
                                            <input className="w-52 text-white bg-[#0f0d0d] h-8 rounded-md border-b-2 border-cyan-600 " type="password" id='confpass' />
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='flex flex-col justify-center mt-8 items-center'>
                            <div>
                                <button type="submit" className='border p-2 w-60 rounded-md bg-orange-500 hover:bg-cyan-400 duration-500' onClick={signupHandler}>Sign In</button>
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
                    )}

                </div >
                <div>
                    <img src={pic} width={"400px"} alt="pic-img1" className='relative top-1 left-4' />
                    <img src={pic2} width={"400px"} alt="pic-img2" className='absolute top-52' />
                </div>
            </div >
        </>
    )
}
