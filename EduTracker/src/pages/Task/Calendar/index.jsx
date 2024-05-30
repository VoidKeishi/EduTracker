import React from 'react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { Badge, Box, Checkbox, Typography } from '@mui/material'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0

  return (
    <Badge
      key={props.day.toString()}
      overlap='circular'
      badgeContent={isSelected ? '🌚' : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  )
}

function Calendar() {
  const [value, setValue] = React.useState(dayjs())
  const [highlightedDays] = React.useState([
    1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29,
    30, 31
  ])

  return (
    <Box sx={{ marginTop: '32px' }}>
      <DateCalendar
        value={value ?? dayjs('30/05/2024')}
        slots={{
          day: ServerDay
        }}
        slotProps={{
          day: {
            highlightedDays
          }
        }}
        onChange={(newValue) => setValue(newValue)}
      />
      {value.date() % 2 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 34px 16px 19px',
            borderRadius: '20px',
            backgroundColor: '#9eeffd',
            color: '#000',
            maxWidth: '332px',
            margin: '8px auto'
          }}
        >
          <Box>
            <Typography variant='h6'>Giảng dạy MMT</Typography>
            <Typography variant='body2'>Thời gian: 10h10-11h45</Typography>
            <Typography variant='body2'>KPI: 2 tiết</Typography>
          </Box>
          <Box>
            <Checkbox {...{ inputProps: { 'aria-label': 'Checkbox demo' } }} />
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '16px 34px 16px 19px',
              borderRadius: '20px',
              backgroundColor: '#9eeffd',
              color: '#000',
              maxWidth: '332px',
              margin: '8px auto'
            }}
          >
            <Box>
              <Typography variant='h6'>Giảng dạy OOP</Typography>
              <Typography variant='body2'>Thời gian: 6h45-8h25</Typography>
              <Typography variant='body2'>KPI: 2 tiết</Typography>
            </Box>
            <Box>
              <Checkbox
                {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
                defaultChecked
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '16px 34px 16px 19px',
              borderRadius: '20px',
              backgroundColor: '#9eeffd',
              color: '#000',
              maxWidth: '332px',
              margin: '0 auto'
            }}
          >
            <Box>
              <Typography variant='h6'>Giảng dạy MMT</Typography>
              <Typography variant='body2'>Thời gian: 14h10-15h50</Typography>
              <Typography variant='body2'>KPI: 2 tiết</Typography>
            </Box>
            <Box>
              <Checkbox
                {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Calendar
