import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  console.log(data)
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>  
    </div>
  )
}

export default EmployeeDashboard