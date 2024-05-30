import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'
import React, { useContext } from 'react'
import NavigationDrawer from '../../component/NavigationDrawer/NavigationDrawer'
import AppBar from './AppBar'
import { UIContext } from '../../context/UIContext'
import Slider from '@mui/material/Slider'
import { DateField } from '@mui/x-date-pickers'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SaveIcon from '@mui/icons-material/Save'
import { Link } from 'react-router-dom'

function Account() {
  const uiContext = useContext(UIContext)
  uiContext.setCurrentPage(3)
  return (
    <Box sx={{ backgroundColor: '#F5FAFB', height: '100vh' }}>
      <NavigationDrawer currentPage={uiContext.currentPage}></NavigationDrawer>
      <AppBar />
      <Box sx={{ padding: '0px 32px', margin: '32px auto' }}>
        <Typography variant='h4'>Hồ sơ</Typography>
        <Box sx={{ display: 'flex' }}>
          <TextField
            label='Họ'
            variant='outlined'
            sx={{ margin: '32px 8px 8px' }}
          />
          <TextField
            label='Tên'
            variant='outlined'
            sx={{ margin: '32px 8px 8px' }}
          />
        </Box>
        <TextField
          label='Mã số'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '210px' }}
        />
        <DateField
          label='Ngày sinh'
          sx={{ margin: '16px 8px', width: '308px' }}
        />
        <TextField
          label='Nơi công tác'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '342px' }}
        />
        <Typography
          variant='body2'
          sx={{
            backgroundColor: '#fff',
            color: '#006874',
            display: 'flex',
            alignItems: 'center',
            margin: '16px',
            gap: '4px',
            padding: '4px',
            borderRadius: '4px',
            width: '146px'
          }}
        >
          <AccountCircleIcon />
          Bạn là giảng viên
        </Typography>
        <Button
          variant='contained'
          startIcon={<SaveIcon />}
          sx={{ borderRadius: '20px', marginLeft: '16px' }}
        >
          Lưu
        </Button>
        <Divider sx={{ margin: '32px' }} />
        <Typography variant='h4'>Tài khoản</Typography>
        <TextField
          label='Email'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '350px' }}
        />
        <TextField
          label='Mật khẩu hiện tại'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '350px' }}
        />
        <TextField
          label='Mật khẩu mới'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '350px' }}
        />
        <TextField
          label='Nhập lại mật khẩu mới'
          variant='outlined'
          sx={{ margin: '16px 8px', width: '350px' }}
        />
        <Button
          variant='contained'
          startIcon={<SaveIcon />}
          sx={{ borderRadius: '20px' }}
        >
          Lưu
        </Button>
        <Link to='/sign-in'>
          <Button
            variant='contained'
            startIcon={<SaveIcon />}
            sx={{
              margin: '32px auto 64px',
              borderRadius: '20px',
              backgroundColor: '#BA1A1A',
              width: '350px'
            }}
          >
            Đăng xuất
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Account
