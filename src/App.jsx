import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard'
import Header from './Components/Others/Header'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {
  
  const [user,setUser] = useState(null)

  const handlelogin = (email,password)=> {
    if(email == 'admin@me.com' && password =='123') {
      setUser('admin')
    }
    else if(email == 'user@me.com' && password =='123') {
      console.log("This is User")
      setUser('employees')
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <div className='bg-[#1C1C1C]'>
      {!user ? <Login handlelogin={handlelogin}/> : ''}
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App