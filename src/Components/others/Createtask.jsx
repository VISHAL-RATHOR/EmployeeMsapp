import React, { useContext } from 'react'
import { useState } from 'react'
import Newtask from '../Tasklist/newtask'
import { AuthContext } from '../../context/AuthProvider'


const Createtask = () => {

  const [userData, setUserData] = useContext(AuthContext)

 const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
     const [category, setCategory] = useState('')

       const [newTask, setNewTask] = useState({})

 
       

    const submitHandler = (e) => {
       e.preventDefault()
       
       setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newtask:true, completed:false, failed:false })

         const data = userData.employees
         console.log(data)

         data.forEach(function(elem){
              if(asignTo == elem.firstName){
                elem.tasks.push(newTask);
                elem.taskCount.newTask = elem.taskCount.newTask+1;
              }
         })
       
           setTaskTitle('')
           setTaskDescription('')
            setTaskDate('')
            setCategory('')
            setAsignTo('')

           



    }

  return (
   <div className='p-5 bg-neutral-900 mt-7 rounded'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}
       className='flex flex-wrap w-fullitems-start justify-between' >
        <div className='w-1/2'>
          <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
                value={taskTitle}
                 onChange={(e) =>{
                  setTaskTitle(e.target.value)
                 }}
          className='text-sm py-1 px-2 w-4/5 ouline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type='text' placeholder='Make a UI Design'/>
         </div>
          <div>
            <h3  className='text-sm text-gray-300 mb-0.5' >Date</h3>
          <input 
          value={taskDate}
                 onChange={(e) =>{
                  setTaskDate(e.target.value)
                 }}
          className='text-sm py-1 px-2 w-4/5 ouline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="Date" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input
          value={asignTo}
                 onChange={(e) =>{
                  setAsignTo(e.target.value)
                 }}
          className='text-sm py-1 px-2 w-4/5 ouline-none bg-transparent border-[1px] border-gray-400 mb-4 '  type="text" placeholder='employee name ' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5' >Category</h3>
          <input 
          value={category}
                 onChange={(e) =>{
                  setCategory(e.target.value)
                 }}
          className='text-sm py-1 px-2 w-4/5 ouline-none bg-transparent border-[1px] border-gray-400 mb-4 '  type="text" placeholder='design, dev, etc' />
          </div>
        </div>
         
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5' >Description</h3>
          <textarea
          value={taskDescription}
                 onChange={(e) =>{
                  setTaskDescription(e.target.value)
                 }}
          className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" cols='30' rows='10' ></textarea>
        
        <button className='bg-amber-700 hover:bg-emerald-700 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
          
      </form>
     </div>
  )
}

export default Createtask
