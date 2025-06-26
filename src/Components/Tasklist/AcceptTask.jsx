import React from 'react'

const AcceptTask = ({data}) => {
    console.log();
  return (
    <div className='h-full flex-shrink-0 w-[370px] p-5 bg-cyan-900 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className=' px-3 rounded text-sm  bg-green-600'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-2'>{data.description}</p>
          
          <div className='flex justify-between mt-4 '>
            <button className='bg-yellow-600 py-1 px-2 text-sm'>
                Mark as Completed
            </button >
            <button className='bg-red-500 py-1 px-2 text-sm'>
                Mark as Failed
            </button>
          </div>
   
   
      </div>

  )
}

export default AcceptTask
