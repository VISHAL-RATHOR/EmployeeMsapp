import React from 'react'
import Header from '../others/Header'
import TaskListnumber from '../others/TaskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {

  return (
    <div>
     <div className='p-10 bg-neutral-900 h-screen w-full'>
  
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListnumber data={props.data}/>
        <Tasklist data={props.data}/>
     </div>
    </div>
  )
}

export default EmployeeDashboard
