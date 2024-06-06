import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [inputRole, setInputRole] = useState('')
  const [checkWorkingPlace, setCheckWorkingPlace] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickClearInputRole = () => setInputRole('')
  const handleClickCheckWorkingPlace = () =>
    setCheckWorkingPlace(!checkWorkingPlace)

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
        <Typography sx={{ fontSize: '1.5rem' }}>Đăng ký</Typography>
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
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            id='passwordInput'
            label='Mật khẩu*'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HttpsOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            id='retypePasswordInput'
            label='Nhập lại mật khẩu*'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HttpsOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            value={inputRole}
            id='inputRole'
            label='Bạn là*'
            variant='outlined'
            onChange={(e) => setInputRole(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PermIdentityIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='clear role input'
                    onClick={handleClickClearInputRole}
                    edge='end'
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth
            value={'Đại học bách khoa Hà Nội'}
            id='workingPlace'
            label='Nơi công tác'
            variant='outlined'
            onClick={handleClickCheckWorkingPlace}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  {checkWorkingPlace ? (
                    <RadioButtonCheckedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
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
          >
            Đăng ký
          </Button>
        </Box>
        <Box sx={{ fontWeight: 'bold' }}>
          <span style={{ marginRight: '1.5rem' }}>Đã có tài khoản?</span>
          <Link
            style={{ textDecoration: 'none', color: '#006874' }}
            to={'/sign-in'}
          >
            Đăng nhập
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignUp
