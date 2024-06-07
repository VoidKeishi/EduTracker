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
  const pendingColor = '#9DDE8B'
  const inProgressColor = '#40A578'
  const completeColor = '#006874'
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
          <ToggleButton style={{backgroundColor: 'white'}}value="calendar" aria-label="calendar view" sx={{ borderRadius: "1rem" }}>
            Lịch
          </ToggleButton>
          <ToggleButton style={{backgroundColor: 'white'}}value="status" aria-label="status view" sx={{ borderRadius: "1rem" }}>
            Trạng thái
          </ToggleButton>
        </ToggleButtonGroup>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', date: '2024-05-01', color: completeColor },
            { title: '14:00 Dạy học UI-UX', date: '2024-06-07', color: inProgressColor},
            { title: '19:30 Dự hội thảo NLP', date: '2024-06-07', color: inProgressColor},
            { title: '20:00 Học piano', date: '2024-06-07', color: pendingColor },
            { title: '6:45 Trông thi Giải tích 3', date: '2024-06-06' },
            { title: '7:30 Seminar', date: '2024-06-09', color: pendingColor },
            { title: 'Họp cổ tức cổ đông', date: '2024-06-17', color: pendingColor},
            { title: 'Spa day', date: '2024-06-17', color: pendingColor },
            { title: '8:00 Dạy học OOP', date: '2024-06-04', color: completeColor },
            { title: '8:00 Dạy học OOP', date: '2024-06-11', color: pendingColor },
            { title: '8:00 Dạy học OOP', date: '2024-06-18', color: pendingColor },
            { title: '8:00 Dạy học OOP', date: '2024-06-25', color: pendingColor },
            { title: '11:00 Dự hội thảo', date: '2024-06-22' },
            { title: 'Nghỉ phép', date: '2024-06-28', color: completeColor },
            ...Array.from({ length: 50 }, (_, index) => {
              const currentDate = new Date();
              const randomDate = new Date(currentDate.getTime() + Math.random() * (currentDate.getTime() - currentDate.setDate(currentDate.getDate() - 30)));
              const formattedDate = randomDate.toISOString().split('T')[0];
              const color = randomDate < currentDate ? completeColor : Math.random() < 0.5 ? inProgressColor : pendingColor;
              const taskTitles = [
                'Hoàn thành dự án',
                'Viết tài liệu',
                'Sửa lỗi',
                'Triển khai tính năng mới',
                'Tối ưu hóa mã nguồn',
                'Kiểm thử ứng dụng',
                'Thiết kế giao diện người dùng',
                'Triển khai ứng dụng',
                'Tạo hướng dẫn sử dụng'
              ];
              const randomTitle = taskTitles[Math.floor(Math.random() * taskTitles.length)];
              return { title: randomTitle, date: formattedDate, color };
            })
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