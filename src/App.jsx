import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard'
import Header from './Components/Others/Header'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'
import { data } from 'autoprefixer'

function App() {
  
  const [user,setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  
  const authdata = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  
  },[])
    

  const handlelogin = (email,password)=> {
    // if(authdata) {
    //   const admin = authdata.admin && authdata.admin.find((e)=>e.email == email && e.password == password)
    //   if(admin) {
    //     setUser('admin')
    //     localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin'}))
    //   }
    // }
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authdata) {
      const employee = authdata.employees[0] && authdata.employees[0].employees.find((e)=>e.email == email && e.password == password)
      if(employee) {
        setUser('employees')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee',data:employee}))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  } 

  return (
    <div className='bg-[#1C1C1C]'>
      {!user ? <Login handlelogin={handlelogin}/> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employees'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App