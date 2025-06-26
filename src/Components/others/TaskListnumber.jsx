import React from 'react'

const TaskListnumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-3 w-screen'>
      
      <div className=' py-6 px-9 w-[22%] bg-red-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
         <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' py-6 px-9 w-[22%] bg-blue-400 rounded-xl'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
         <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className=' py-6 px-9 w-[22%] bg-fuchsia-500 rounded-xl'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
         <h3 className='text-xl font-medium'>active Task</h3>
      </div>

      <div className=' py-6 px-9 w-[22%] bg-yellow-400 rounded-xl mr-22'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
         <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

      
    </div>
  )
}

export default TaskListnumber
