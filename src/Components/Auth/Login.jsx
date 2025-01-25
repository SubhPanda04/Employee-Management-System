import React, { useState } from 'react'

const Login = ({handlelogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=> {
        e.preventDefault()
        handlelogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className=' flex h-screen w-screen items-center justify-center'>
        <div className='border-4 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=> {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value);
                }}
                required 
                className='mt-5 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter your email' 
                 />
                <input
                value={password}
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                required 
                className='mt-5 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter Passoword' 
                
                />                
                <button className='mt-5 text-white outline-none border-none bg-emerald-600 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login