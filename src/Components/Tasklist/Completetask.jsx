import React from 'react'

const Completetask = ({data}) => {
  return (
    
        <div className='h-full flex-shrink-0 w-[370px] p-5 bg-pink-900 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className=' px-3 rounded text-sm  bg-green-600'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
      
      <div className='mt-2'>
        <button className='w-full bg-fuchsia-800 py-1 px-2 text-sm'>Completed</button>
      </div>
      
      </div>
  )
}

export default Completetask
