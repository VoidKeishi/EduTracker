import styles from './KPIDetail.module.css'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, TextField, Typography } from '@mui/material'
import AppBar from './AppBar'
import KPIDetailCard from '../../../component/KPIDetailCard'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
const KPIDetail = () => {
  const { kpiData, setKpiData } = useContext(AppContext)
  const onAddTargetHandle = () => {
    setKpiData((prev) => {
      prev[0].targets.push({
        name: '',
        tasks: []
      })
      return [...prev]
    })
  }

  return (
    <Box sx={{ backgroundColor: '#f5fafb' }}>
      <AppBar />
      <Typography variant='h5' sx={{ margin: '12px 0px 24px 32px' }}>
        Giảng dạy
      </Typography>
      {kpiData[0].targets.map((target, index) => (
        <KPIDetailCard title={target.name} data={target.tasks} key={index} />
      ))}
      <Box sx={{ weight: '100%', height: '200px' }}></Box>
      <Button
        variant='contained'
        startIcon={<AddIcon />}
        sx={{
          position: 'fixed',
          right: '32px',
          bottom: '60px',
          borderRadius: '20px'
        }}
        onClick={onAddTargetHandle}
      >
        Thêm mục tiêu
      </Button>
    </Box>
  )
}

export default KPIDetail
