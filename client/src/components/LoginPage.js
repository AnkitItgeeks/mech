import axios from 'axios';
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage = ({ onLogin }) => {
    const [loginDetails, setLoginDetail] = useState({
        email: '',
        password: ''
    });
    const [loginDetailsErrors, setLoginDetailErrors] = useState({
        email: '',
        password: ''
    });
    const changeHandler = (event) => {
        setLoginDetail({ ...loginDetails, [event.target.name]: event.target.value })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (loginDetails.email.length === 0) {
            setLoginDetailErrors({
                email: 'Email is Required'
            })
        } else if (loginDetails.password.length === 0) {
            setLoginDetailErrors({
                password: 'Password is Required'
            })
        } else {
            axios.post("http://localhost:5000/admin", { ...loginDetails })
                .then(result => {
                    console.log(result)
                    if (result.data === "Success") {
                        onLogin(loginDetails)
                        alert("Welcome Admin")
                    } else {
                        alert("You are not Admin")
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className='flex flex-col gap-[20px] h-[80vh] justify-between'>
            <div className='flex flex-col gap-[20px]'>
                <div className='flex justify-center items-center'>
                    <h1 className='font-headingFont text-5xl w-1/3 max-w-[650px] text-center cursor-default'>Login to Your Account</h1>
                </div>
                <form onSubmit={submitHandler} className='flex flex-col items-center gap-[20px] w-1/3 mx-auto'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col gap-4 w-full '>
                            <div className='border p-3 rounded-full bg-white relative'>
                                <input type='text' name='email' id='email' placeholder='Email / Phone / UserName'
                                    onChange={changeHandler} className='font-bodyFont outline-none w-full text-black' />
                                {loginDetailsErrors.email && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{loginDetailsErrors.email}</p>}
                            </div>
                            <div className='border p-3 rounded-full bg-white relative'>
                                <input type='text' name='password' id='password' placeholder='Password'
                                    onChange={changeHandler} className='font-bodyFont outline-none w-full' />
                                {loginDetailsErrors.password && <p className='absolute bottom-[-15px] text-red-600 text-[12px]'>{loginDetailsErrors.password}</p>}

                            </div>
                        </div>
                    </div>
                    {/* Login buttons */}
                    <button className='border p-3 rounded-full bg-black text-white flex items-center justify-between w-full cursor-pointer'>
                        <div className='font-bodyFont'>Login to Your Account</div>
                        <FaArrowRightLong className='text-xl' />
                    </button>
                    {/* forgot */}
                    <div><p className='text-xs font-bodyFont cursor-help'>Forgot Password ?</p></div>
                </form>
            </div>
            {/* Footer */}
            <div className='flex justify-between items-center'>
                <div><p className='font-bodyFont text-xs'>Privacy Policy | Terms & Conditions</p></div>
                <div><p className='font-bodyFont text-xs'>Copyrights@fit&fine2024</p></div>
            </div>
        </div>
    )
}

export default LoginPage