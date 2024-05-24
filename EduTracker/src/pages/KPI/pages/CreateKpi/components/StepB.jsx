/* eslint-disable react/prop-types */
import { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import IconButton from '@mui/material/IconButton'

function StepB({ handleNext, handleBack }) {
  const [inputKpiTitle, setInputKpiTitle] = useState('')
  const handleClickClearInputRole = () => setInputKpiTitle('')

  return (
    <>
      <Box
        sx={{
          marginTop: "8rem",
          marginBottom: "3rem",
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
          <TextField
            sx={{
              marginBottom: "1.5rem",
            }}
            fullWidth
            value={inputKpiTitle}
            id='inputRole'
            label='Tên KPI'
            variant='outlined'
            onChange={(e) => setInputKpiTitle(e.target.value)}
            InputProps={{
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
          sx={{
              marginBottom: "1.5rem",
            }}
            fullWidth
            id='inputRole'
            label='Thời gian bắt đầu'
            variant='outlined'
            type='date'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                </InputAdornment>
              )
            }}
          />

          <TextField
          sx={{
              marginBottom: "1.5rem",
            }}
            fullWidth
            id='inputRole'
            label='Thời gian kết thúc'
            variant='outlined'
            type='date'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginBottom: "1.5rem"
        }}
      >
        <Button variant="text" onClick={handleBack}>Trở lại</Button>
        <Button variant="contained" sx={{ marginLeft: "1rem" }} onClick={handleNext}>Tiếp tục</Button>
      </Box>
    </>
  )
}

export default StepB