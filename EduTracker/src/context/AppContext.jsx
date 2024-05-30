import { createContext, useState } from 'react'
import { user, kpi } from '../data'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(user.sensei)
  const [kpiData, setKpiData] = useState(kpi)
  const contextValue = {
    userData,
    setUserData,
    kpiData,
    setKpiData
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
