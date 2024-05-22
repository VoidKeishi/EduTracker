import { createContext, useState } from 'react'
import { user } from '../data'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(user.sensei)

  const contextValue = {
    userData,
    setUserData
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
