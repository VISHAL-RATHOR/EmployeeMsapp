import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {

  

 const [email, setemail] = useState('')
  const [Password, setPassword] = useState('') 


  const submitHandler = (e) =>{
    e.preventDefault()
  handleLogin(email,Password);

    setemail("")
    setPassword("")
  }       


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-amber-600 p-20'>
    <form 
      onSubmit ={(e) =>{
          submitHandler(e)
      } }


      className='flex flex-col items-center justify-center'>
     <input 
     value={email}
     onChange={(e) =>{
      setemail(e.target.value)
     }}
     required className='border-2 outline-none bg-transparent border-amber-600 text-xl py-3 px-5 rounded-2xl' type="email" placeholder='Enter your email' />
     <input
        value={Password}
        onChange={(e)=> {
             setPassword(e.target.value)
        }}
     required className='border-2 outline-none bg-transparent border-amber-600 text-xl py-3 px-5 rounded-2xl mt-3' type="password" placeholder='Enter password' />
     <button className='w-40 hover:bg-lime-700 mt-7 outline-none  bg-amber-600 text-xl py-3 px-5 rounded-2xl'>Login</button>
    </form>
      </div>
    </div>
  )
}

export default Login
