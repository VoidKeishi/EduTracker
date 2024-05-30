import {
  Box,
  Button,
  IconButton,
  MobileStepper,
  TextField,
  Typography
} from '@mui/material'
import { DateField } from '@mui/x-date-pickers'
import React, { useState } from 'react'
import AppBar from './AppBar'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import Add from '@mui/icons-material/Add'
import StepLabel from '@mui/material/StepLabel'
import KPICard from './KPICard'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const steps = [
  <Box sx={{ backgroundColor: '#fff', marginTop: '53px' }}>
    <Typography variant='h6' sx={{ textAlign: 'center' }}>
      Phương thức
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '64px auto',
        gap: '23px'
      }}
    >
      <Button variant='outlined' sx={{ borderRadius: '20px', width: '200px' }}>
        Từ tệp Excel {`(*)`}
      </Button>
      <Button variant='outlined' sx={{ borderRadius: '20px', width: '200px' }}>
        Thiết lập từ đầu
      </Button>
    </Box>
    <Typography
      variant='body2'
      sx={{ textAlign: 'right', paddingRight: '32px', marginTop: '32px' }}
    >
      {`(*)`} Xem mẫu tệp{' '}
      <Button variant='text' sx={{ fontSize: '0.75rem' }}>
        ở đây
      </Button>
    </Typography>
  </Box>,
  <Box sx={{ backgroundColor: '#fff', marginTop: '53px' }}>
    <Typography variant='h6' sx={{ textAlign: 'center' }}>
      Thông tin KPI
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '64px auto',
        gap: '23px'
      }}
    >
      <TextField label='Tên KPI' />
      <DateField label='Ngày bắt đầu' />
      <DateField label='Ngày kết thúc' />
    </Box>
  </Box>,
  (isAddNewTarget, setIsAddNewTarget) => (
    <Box sx={{ backgroundColor: '#fff', marginTop: '53px' }}>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        Mục tiêu
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: '64px auto',
          gap: '23px',
          overflow: 'scroll',
          height: '500px'
        }}
      >
        <KPICard />
        {isAddNewTarget && <KPICard />}
        <Button
          variant='contained'
          sx={{ borderRadius: '20px' }}
          startIcon={<Add />}
          onClick={() => setIsAddNewTarget(true)}
        >
          Thêm mục tiêu
        </Button>
      </Box>
    </Box>
  ),
  <Box sx={{ backgroundColor: '#fff', marginTop: '53px' }}>
    <Typography variant='h6' sx={{ textAlign: 'center' }}>
      Hoàn thành
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '64px auto',
        gap: '23px'
      }}
    >
      <Typography variant='h4'>Tạo mới KPI thành công</Typography>
      <Link to={'/kpi/detail'}>
        <Button variant='contained' startIcon={<LogoutIcon />}>
          Tạo mới KPI thành công
        </Button>
      </Link>
    </Box>
  </Box>
]
function AddKPI() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAddNewTarget, setIsAddNewTarget] = useState(false)
  const maxSteps = steps.length
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ backgroundColor: '#f5fafb', height: '100vh' }}>
      <AppBar />
      <Box sx={{ backgroundColor: '#fff', marginTop: '53px' }}>
        {activeStep !== 2
          ? steps[activeStep]
          : steps[activeStep](isAddNewTarget, setIsAddNewTarget)}
        <MobileStepper
          variant='text'
          steps={maxSteps}
          position='bottom'
          activeStep={activeStep}
          nextButton={
            <Button
              size='small'
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              endIcon={<ArrowCircleRightIcon />}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={handleBack}
              disabled={activeStep === 0}
              startIcon={<ArrowCircleLeftIcon />}
            >
              Back
            </Button>
          }
          sx={{ bottom: '150px', maxWidth: '375px', margin: '0 auto' }}
        >
          <StepLabel>Phương thức</StepLabel>
        </MobileStepper>
      </Box>
    </Box>
  )
}

export default AddKPI
