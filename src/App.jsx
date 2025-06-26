import React, { useContext, useEffect} from 'react'

 import Login from "./Components/Auth/Login";

import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  
  const [user, setUser] = useState(null)
     const [loggedInUserData, setloggedInUserData] = useState(null)
  const [authData] = useContext(AuthContext);

  
  useEffect(()=>{
    
      const loggedInUser = localStorage.getItem('loggedInUser');
     
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser({role: userData.role})
        setloggedInUserData(userData.data)

      }

  }, [])
   
  
  const handleLogin = (email,password) =>{
       if(email == 'admin@example.com' && password == '123'){
       setUser({role:'admin'});
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
       }
       else if(authData && authData.employees){

      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );

      if(employee){
        setUser({role:'employee'});
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
      else{
        alert("Invalid Credentials");
      }
        
       }
       else{
        alert("Invalid Credentials")
       }
  };
    
  const data = useContext(AuthContext)
 

  return (
    <>
   {!user ? (<Login handleLogin={handleLogin}/> )
   : user.role === 'admin' ? (<AdminDashboard  changeUser={setUser}  />) : user.role == 'employee' ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />) : null  }
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
