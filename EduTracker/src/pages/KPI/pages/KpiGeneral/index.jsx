/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KpiGeneralInfo from './components/KpiGeneral';
import { useNavigate } from 'react-router-dom'

function KpiGeneral() {
  const navigate = useNavigate()

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          marginBottom: "2rem"
        }}
      >
        <Typography
          variant='body1'
          sx={{
            fontSize: "1.5rem"
          }}
        >
          Tiến độ KPI
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: '50px',
            backgroundColor: '#006874',
            fontSize: '0.75rem'
          }}
          onClick={() => navigate('/kpi/create-kpi')}
        >
          Tạo mới KPI
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
        <KpiGeneralInfo />
      </Box>
    </>

  )
}

export default KpiGeneral