/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import KpiTitle from '../../../../../components/Svg/KpiTitle';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles'

const data = [
  { value: 60, color: '#006874' },
  { value: 40, color: '#e6f0e9' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 50,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color='primary' variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="black">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function KpiGeneralInfo({KPIName, title1, value1, title2, value2, title3, value3}) {
  return (
    <Paper
          elevation={4}
          sx={{
            width: "48%",
            padding: "1rem 1.5rem 0.7rem",
            marginBottom: "3rem",
            borderRadius: "1rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.8rem"
              }}
            >
              <KpiTitle />
              <Typography
                variant='body1'
                sx={{
                  fontWeight: "bold"
                }}
              >
                {KPIName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.4rem"
              }}
            >
              <Box>
                <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
                  <PieCenterLabel>60</PieCenterLabel>
                </PieChart>
              </Box>
              <Box
                sx={{
                  width: "100%"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "0.5rem",
                    gap: "0.8rem"
                  }}
                >
                  <Typography variant='body1'>{title1}</Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={value1} />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "0.5rem",
                    gap: "0.8rem"
                  }}
                >
                  <Typography variant='body1'>{title2}</Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={value2} />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "0.5rem",
                    gap: "0.8rem"
                  }}
                >
                  <Typography variant='body1'>{title3}</Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgressWithLabel value={value3} />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box sx={{ paddingLeft: "5rem" }}>
                <Typography variant='body1'>Ứớc tính hoàn thành:</Typography>
                <Typography variant='body1' sx={{ textAlign: "center" }}>8 ngày</Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: '50px',
                    fontSize: '0.75rem'
                  }}
                >
                  Chi tiết
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
  )
}

export default KpiGeneralInfo