import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
import { useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
     const [userdata, setUserdata] = useState(null) 

      useEffect(() => {
        setLocalStorage()
       const{employees} =getLocalStorage()
     setUserdata({employees})  
      }, [])
      

    
  return (

    <div>
     <AuthContext.Provider value={[userdata, setUserdata]}>
         {children}
     </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
