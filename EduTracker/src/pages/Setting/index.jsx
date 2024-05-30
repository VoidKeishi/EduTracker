import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography
} from '@mui/material'
import React, { useContext } from 'react'
import NavigationDrawer from '../../component/NavigationDrawer/NavigationDrawer'
import AppBar from './AppBar'
import { UIContext } from '../../context/UIContext'
import Slider from '@mui/material/Slider'

function Setting() {
  const uiContext = useContext(UIContext)
  uiContext.setCurrentPage(4)
  return (
    <Box sx={{ backgroundColor: '#F5FAFB', height: '100vh' }}>
      <NavigationDrawer currentPage={uiContext.currentPage}></NavigationDrawer>
      <AppBar />
      <Box sx={{ padding: '0px 40px', margin: '0 auto' }}>
        <Typography variant='h5' sx={{ marginTop: '32px' }}>
          Chữ
        </Typography>
        <Typography variant='h6' sx={{ marginLeft: '8px', marginTop: '16px' }}>
          Cỡ chữ
        </Typography>
        <Slider
          defaultValue={16}
          step={2}
          marks
          min={14}
          max={24}
          valueLabelDisplay='auto'
          sx={{ textAlign: 'center', marginTop: '16px', width: '100%' }}
        />
        <Typography variant='h6' sx={{ marginLeft: '8px', marginTop: '16px' }}>
          Font chữ
        </Typography>
        <FormControl sx={{ margin: '8px auto' }}>
          <RadioGroup
            aria-labelledby='font'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='Cổ điển'
              control={<Radio />}
              label='Cổ điển'
            />
            <FormControlLabel
              value='Sáng tạo'
              control={<Radio />}
              label='Sáng tạo'
            />
          </RadioGroup>
        </FormControl>
        <Divider />
        <Typography variant='h5' sx={{ marginTop: '32px' }}>
          Ngôn ngữ
        </Typography>
        <FormControl fullWidth sx={{ marginTop: '16px' }}>
          <Select labelId='language' id='language' value={'Tiếng Việt'}>
            <MenuItem value={'Tiếng Việt'}>Tiếng Việt</MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Setting
