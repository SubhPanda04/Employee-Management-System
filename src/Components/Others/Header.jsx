import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('');

  // if(!data) {
  //   setUsername('Admin')
  // }
  // else {
  //   setUsername(data.firstName)
  // }

  const logOut = ()=> {
     localStorage.setItem('loggedInUser','')
     props.changeUser('')
     window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>username &#9996;</span></h1>
        <button onClick={logOut} className='cursor-pointer bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header