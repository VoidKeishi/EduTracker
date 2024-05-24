/* eslint-disable react-refresh/only-export-components */
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom"

function KPI() {
  return (
    <Box>
      <Typography 
        variant='body1'
        sx={{
          marginBottom: "0.5rem"
        }}  
      >
        KPI
      </Typography>
      <Divider/>
      <Box
        sx={{
          padding: "1.5rem 2rem 0rem 2rem"
        }}
      >
          <Outlet />
      </Box>
    </Box>
  )
}

export default KPI