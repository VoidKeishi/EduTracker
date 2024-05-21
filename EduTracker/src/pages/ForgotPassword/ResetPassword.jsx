import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        minWidth: "45rem",
      }}>
      <Paper
        elevation={8}
        sx={{
          backgroundColor: "#F5FAFB",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          padding: "3rem 5rem",
          width: "35rem",
          borderRadius: "15px"
        }}
      >
        <Typography sx={{ fontSize: "1.5rem" }}>Quên mật khẩu</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <TextField
            required
            fullWidth
            type={showPassword ? 'text' : 'password'}
            id="passwordInput"
            label="Mật khẩu mới*"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            required
            fullWidth
            type={showPassword ? 'text' : 'password'}
            id="retypePasswordInput"
            label="Nhập lại mật khẩu mới*"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button  
            variant="contained"
            sx={{
              borderRadius: "50px",
              backgroundColor: "#006874",
              fontSize: "0.75rem"
            }}
            onClick={() => navigate('/sign-in')}
          >
            Đổi mật khẩu
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default ResetPassword