import { createContext, useState } from 'react'

export const UIContext = createContext()

export const UIProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const contextValue = {
    sideBar,
    setSideBar,
    currentPage,
    setCurrentPage
  }

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  )
}
