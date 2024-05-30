import CssBaseline from "@mui/material/CssBaseline";
import React from 'react'
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
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { userData } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const signInHandle = () => {
    if (email === userData.email && password == userData.password) {
      navigate('/kpi')
    }
  }

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
        <Typography sx={{ fontSize: '1.5rem' }}>Đăng nhập</Typography>
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
          <Box
            sx={{
              fontWeight: 'bold',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label='Ghi nhớ tôi' />
            </FormGroup>
            <Box>
              <Link
                style={{ textDecoration: 'none', color: '#006874' }}
                to={'/forgot-password'}
              >
                Quên mật khẩu
              </Link>
            </Box>
          </Box>
          <Button
            variant='contained'
            sx={{
              borderRadius: '50px',
              backgroundColor: '#006874',
              fontSize: '0.75rem'
            }}
            onClick={signInHandle}
          >
            Đăng nhập
          </Button>
        </Box>
        <Box sx={{ fontWeight: 'bold' }}>
          <span style={{ marginRight: '1.5rem' }}>Chưa có tài khoản?</span>
          <Link style={{ textDecoration: 'none', color: '#006874' }} to={'/sign-up'}>
            Tạo tài khoản
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignIn
