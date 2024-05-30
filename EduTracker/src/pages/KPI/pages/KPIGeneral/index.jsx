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
        <KpiGeneralInfo KPIName="Giảng dạy" title1 = "OOP" value1={50} title2 = "ITSS" value2={60} title3 = "UI-UX" value3={20}  />
        <KpiGeneralInfo KPIName="Phục vụ" title1 = "Hội thảo" value1={20} title2 = "ĐGTD" value2={30} title3 = "SHCD" value3={15} />
        <KpiGeneralInfo KPIName="Nghiên cứu" title1 = "Ứng dụng" value1={50} title2 = "Kiểm thử" value2={60} title3 = "Lab" value3={75} />
      </Box>
    </>

  )
}

export default KpiGeneral