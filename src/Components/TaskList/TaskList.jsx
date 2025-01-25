import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'>
        <div className='flex-shrink-0 w-[300px] h-full p-2 bg-red-400 rounded-xl'>
            <div className='flex items-end justify-between'>
                <h3 className='bg-red-500 py-1 px-3 ml-2 mt-2 rounded text-sm'>
                    High
                </h3>
                <h4 className='mb-1 mr-1.5 text-sm'>25 Jan 2025</h4>
            </div>
            <h2 className='py-1 px-3 mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm py-1 px-3 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt iure libero dolore, illo corporis!</p>
        </div>
        <div className='flex-shrink-0 w-[300px] h-full p-2 bg-blue-400 rounded-xl'>
            <div className='flex items-end justify-between'>
                <h3 className='bg-red-500 py-1 px-3 ml-2 mt-2 rounded text-sm'>
                    High
                </h3>
                <h4 className='mb-1 mr-1.5 text-sm'>25 Jan 2025</h4>
            </div>
            <h2 className='py-1 px-3 mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm py-1 px-3 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt iure libero dolore, illo corporis!</p>
        </div>
        <div className='flex-shrink-0 w-[300px] h-full p-2 bg-green-400 rounded-xl'>
            <div className='flex items-end justify-between'>
                <h3 className='bg-red-500 py-1 px-3 ml-2 mt-2 rounded text-sm'>
                    High
                </h3>
                <h4 className='mb-1 mr-1.5 text-sm'>25 Jan 2025</h4>
            </div>
            <h2 className='py-1 px-3 mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm py-1 px-3 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt iure libero dolore, illo corporis!</p>
        </div>
    </div>
  )
}

export default TaskList