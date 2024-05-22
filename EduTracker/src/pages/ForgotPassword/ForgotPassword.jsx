import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFA',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        minWidth: '45rem'
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: '#F5FAFB',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '3rem 5rem',
          width: '35rem',
          borderRadius: '15px'
        }}
      >
        <Typography sx={{ fontSize: '1.5rem' }}>Quên mật khẩu</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            width: '100%'
          }}
        >
          <TextField
            fullWidth
            id='emailInput'
            label='Email*'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MailOutlineIcon />
                </InputAdornment>
              )
            }}
          />
          <Button
            variant='contained'
            sx={{
              borderRadius: '50px',
              backgroundColor: '#006874',
              fontSize: '0.75rem'
            }}
            onClick={() => navigate('/reset-password')}
          >
            Gửi email
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default ForgotPassword
