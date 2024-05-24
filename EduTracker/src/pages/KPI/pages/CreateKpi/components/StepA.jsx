/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function StepA({ activeStep, handleNext }) {
  return (
    <>
      <Box
        sx={{
          marginTop: "4rem",
          marginBottom: "5rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Box
          sx={{
            width: "50%"
          }}
        >
          <Typography 
            variant='body1' 
            sx={{ 
              textAlign: "center",
              marginBottom: "1rem"
            }}
          >
            Lựa chọn phương thức thiết lập:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            <Button 
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "5rem",
                padding: "0.5rem 0",
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Từ tệp excel (*)
            </Button>
            <Button 
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "5rem",
                padding: "0.5rem 0",
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              Từ hệ thống
            </Button>
            <Button 
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "5rem",
                padding: "0.5rem 0",
                '&:hover': {
                  color: 'white'
                }
              }}
              onClick={handleNext}
            >
              Thiết lập từ đầu
            </Button>
          </Box>
          <Box>
            <Typography 
              variant='body1'
              sx={{
                marginTop: "2rem",
                textAlign: "center"
              }}
            >
              (*) Sử dụng mẫu của hệ thống <a href='https://docs.google.com/spreadsheets/d/19sig_kab5kxMOGkdpxND1W1EGA6zsnJdVOWA3lTNvaM/edit#gid=0'>tại đây</a>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end"
        }}
      >
        {
          activeStep == 0
          ? <Button variant="text" disabled>Trở lại</Button>
          : <Button variant="text">Trở lại</Button>
        }
        <Button variant="contained" sx={{ marginLeft: "1rem" }} onClick={handleNext}>Tiếp tục</Button>
      </Box>
    </>
  )
}

export default StepA