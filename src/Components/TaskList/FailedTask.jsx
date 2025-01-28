import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full px-4 py-7 bg-yellow-400 rounded-xl">
    <div className="flex items-end justify-between">
      <h3 className="bg-red-500 py-1 px-3 rounded text-sm">{data.category}</h3>
      <h4 className="text-sm">{data.taskDate}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
    <p className="text-sm mt-2">{data.taskDescription}</p>
    <div className='flex justify-between mt-4'>
      <button className='bg-red-500 py-1 px-1 text-sm cursor-pointer'>Failed Task</button>
    </div>
  </div>
  )
}

export default FailedTask