import React, { useContext } from 'react'
import AppBar from './AppBar'
import { UIContext } from '../../context/UIContext'
import NavigationDrawer from '../../component/NavigationDrawer/NavigationDrawer'
import Calendar from './Calendar'
import { Box } from '@mui/material'

function Task() {
  const uiContext = useContext(UIContext)
  uiContext.setCurrentPage(2)
  return (
    <Box sx={{ backgroundColor: '#F5FAFB' }}>
      <NavigationDrawer currentPage={uiContext.currentPage}></NavigationDrawer>
      <AppBar />
      <Calendar />
    </Box>
  )
}

export default Task
