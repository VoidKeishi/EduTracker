import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DailyTask from './components/DailyTask';

function Task() {
  const today = new Date()
  const date = String(today.getDate()).padStart(2, '0') + '/' + 
  String(today.getMonth() + 1).padStart(2, '0') + '/' + 
  today.getFullYear();
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
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', date: '2024-05-01' },
            { title: 'event 2', date: '2024-06-07' }
          ]}
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