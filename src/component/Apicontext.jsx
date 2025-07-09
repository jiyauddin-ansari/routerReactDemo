import React, { createContext, useState } from 'react'
export const Apicontext=createContext();
const ApiProvider = ({children}) => {
  const [user,setUser]=useState(null);
  return (
    <Apicontext.Provider value={{user,setUser}}>
      {children}
    </Apicontext.Provider>
  )
}

export default ApiProvider
