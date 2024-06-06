import React, {useState} from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DailyTask from './components/DailyTask';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Task() {
  const today = new Date()
  const date = String(today.getDate()).padStart(2, '0') + '/' + 
  String(today.getMonth() + 1).padStart(2, '0') + '/' + 
  today.getFullYear();
  const [view, setView] = React.useState('month');

  const handleView = (event, newView) => {
    setView(newView);
  };
  
  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: "10rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          width: "70%",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={view}
          exclusive
          onChange={handleView}
          sx={{ marginBottom: "1rem" }}
          aria-label="calendar view"
        >
          <ToggleButton value="calendar" aria-label="calendar view" sx={{ borderRadius: "1rem" }}>
            Lịch
          </ToggleButton>
          <ToggleButton value="status" aria-label="status view" sx={{ borderRadius: "1rem" }}>
            Trạng thái
          </ToggleButton>
        </ToggleButtonGroup>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', date: '2024-05-01' },
            { title: '14:00 Dạy học UI-UX', date: '2024-06-07' },
            { title: '15:30 Dự hội thảo NLP', date: '2024-06-07' },
            { title: '20:00 Học piano', date: '2024-06-07' },
            { title: '6:45 Trông thi Giải tích 3', date: '2024-06-06' },
            { title: '7:30 Seminar', date: '2024-06-09' },
            { title: 'Họp cổ tức cổ đông', date: '2024-06-17' },
            { title: 'Spa day', date: '2024-06-17' },
            { title: '8:00 Dạy học', date: '2024-06-04' },
            { title: '8:00 Dạy học', date: '2024-06-11' },
            { title: '8:00 Dạy học', date: '2024-06-18' },
            { title: '8:00 Dạy học', date: '2024-06-25' },
            { title: '11:00 Dự hội thảo', date: '2024-06-22' },
            { title: 'Nghỉ phép', date: '2024-06-28' },
            
          ]}
          eventColor="#006874"
        />
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "1.5rem 1.5rem 1.5rem",
            borderRadius: "30px",
          }}
        >
          <Typography 
            variant='body1'
            sx={{
              marginBottom: "1rem",
              fontSize: "2rem"
            }}
          >
            Công việc theo ngày
          </Typography>
          <Typography 
            variant='body1'
            sx={{
              marginBottom: "1.5rem"
            }}
          >
            {date}
          </Typography>
          <DailyTask taskName="Dạy học UI-UX" taskLocation="D9-401" taskTime = "14h00 - 17h30"/>
          <Divider />
          <DailyTask taskName="Dự hội thảo NLP" taskLocation="C2-101" taskTime = "19h00 - 21h00"/>
          <Divider />
          <DailyTask taskName="Học piano" taskLocation="Nhà" taskTime = "21h30 - 22h00"/>
          <Box
            sx={{
              marginTop: "2rem",
              marginRight:"1rem", 
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button variant="text">+ Công việc mới</Button>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: "1.5rem 1rem 2rem",
            borderRadius: "30px"
          }}
        >
          <Typography 
            variant='body1'
            sx={{
              marginBottom: "1rem",
              textAlign: "center",
              fontSize: "2rem"
            }}
          >
            Ghi chú cho ngày
          </Typography>
          <Typography 
            variant='body1'
            sx={{
              marginBottom: "1.5rem",
              textAlign: "center"
            }}
          >
            {date}
          </Typography>
          <Box
            sx={{
              opacity: "0.4"
            }}
          >
            <Typography
              variant='body1'
              sx={{

              }}
            >
              Chú thích ...
            </Typography>
            <Divider />
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              marginRight:"1rem", 
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button variant="text">Chỉnh sửa</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Task