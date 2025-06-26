import React from 'react'
import AcceptTask from './AcceptTask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import FailedTask from './failedTask'

const Tasklist = ({data}) => {
  console.log(data);
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5  mt-10'>
     
     {
      data.tasks.map((elem, idx)=>{
       
       if(elem.active){

        return <AcceptTask key={idx} data={elem}/>
       }

       if(elem.newTask){
        return <Newtask key={idx} data={elem}/>
       }

       if(elem.completed){
        return <Completetask key={idx} data={elem}/>
       }

       if(elem.failed){
        return <FailedTask key={idx} data={elem}/>
       }

      })
     }
      
    </div>
  )
}

export default Tasklist
