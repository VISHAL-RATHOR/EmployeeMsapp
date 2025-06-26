import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localstorage'

const Header = (props) => {
  
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstName)
  // }
 
    const logOutUser = () =>{

        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl text-amber-50 font-medium'>Hello <br /> <span className='text-3xl text-amber-50 font-se'>username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg text-white rounded-xl px-2 py-2 font-medium'>Log Out</button>
    </div>
  )
}

export default Header
