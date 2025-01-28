import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear();

    const [user, setUser] = useState({ employees: [], admin: [] });

    useEffect(() => {
      setLocalStorage()
      const data = getLocalStorage();
      setUser(data);
  }, []);
    
  return (
    <div>
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider