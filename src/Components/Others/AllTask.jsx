import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

export const AllTask = () => {
    const authData = useContext(AuthContext);
    const employees = authData.employees[0].employees;
    console.log(employees)
    
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 h-60'>
             <div className='bg-red-400 mb-2 py-1 px-4 flex justify-between rounded text-xl'>
                    <h2 className='w-1/7 py-3 px-4 text-center  bg-red-900'>Employee Name</h2>
                    <h3 className='w-1/7 py-3 px-4  text-center  bg-red-900'>New Task</h3>
                    <h5 className='w-1/7 py-3 px-4 text-center  bg-red-900'>Active Task</h5>
                    <h5 className='w-1/7 py-3 px-4 text-center  bg-red-900'>Completed Task</h5>
                    <h5 className='w-1/7 py-3 px-4 text-center  bg-red-900'>Failed Task</h5>
                </div>
            <div className='h-[80%] overflow-auto'>
            {employees && employees.map((employee,id) => (
                  
                  <div key={id} className='border-1 py-1 px-4 flex overflow-auto justify-between rounded mb-2 text-l bg-transparent'>
                    <h2 className='w-1/7 py-3 px-4 text-center text-white-600'>{employee.firstName}</h2>
                    <h3 className='w-1/7  py-3 px-4 text-center  bg-blue-600'>{employee.taskNumber.newtask}</h3>
                    <h5 className='w-1/7 py-3 px-4  text-center  bg-yellow-400'>{employee.taskNumber.active}</h5>
                    <h5 className='w-1/7 py-3 px-4  text-center  bg-green-600'>{employee.taskNumber.completed}</h5>
                    <h5 className='w-1/7 py-3 px-4  text-center  bg-red-600'>{employee.taskNumber.failed}</h5>
                </div>
            ))}
            </div>
        </div> 
    );
};

export default AllTask;