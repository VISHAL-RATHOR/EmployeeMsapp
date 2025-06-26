import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    
    
  return (
    <div className='bg-neutral-900 p-5 mt-5 rounded h-60 '>
      <div className='bg-emerald-900 mb-2  py-2 px-4 flex justify-between rounded'>
        <h2 className=' text-lg font-medium w-1/5 text-amber-50'>Employee Name</h2>
        <h3 className=' text-lg font-medium w-1/5  text-amber-50 '>New Task</h3>
       <h5 className=' text-lg font-medium w-1/5  text-amber-50 '>Completed</h5>
        <h5 className=' text-lg font-medium w-1/5  text-amber-50 '>Active Task</h5>
        <h5 className=' text-lg font-medium w-1/5  text-amber-50 '>Failed</h5>
      </div>
      <div className='h-[80%] overflow-auto '>
        {userData.employees.map(function(elem, idx){
                   return <div key={idx} className='bg-amber-950 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className=' px-5 text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
        <h3 className=' px-5 text-lg font-medium w-1/5 text-emerald-300'>{elem.taskCount.newTask}</h3>
        <h5 className='px-7 text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCount.completed}</h5>
        <h5 className='px-7 text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.active}</h5>
        <h5 className='px-6 text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
      </div>
       })
       }
      </div>
        </div>
  )
}

export default Alltask
