import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function KPICard({ title: headline, data }) {
  const [isNewTarget, setIsNewTarget] = useState(!headline)
  const [isAddTask, setIsAddTask] = useState(false)
  const [title, setTitle] = useState(headline)
  const [tasks, setTasks] = useState(data || [])
  const [isExpanded, setIsExpanded] = useState(false)
  const [newTask, setNewTask] = useState({
    name: '',
    weight: 0.0,
    min: 0,
    unit: '',
    done: 0
  })

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: '20px',
        border: '1px solid #cac4d0',
        boxSizing: 'border-box',
        width: '362px',
        margin: '0 auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
        backgroundColor: '#f5fafb'
      }}
    >
      <Box>
        {isNewTarget ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {' '}
            <TextField
              id='outlined-basic'
              label='Tên mục tiêu'
              variant='outlined'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              sx={{ maxWidth: '45%' }}
            ></TextField>
            <Button
              variant='outlined'
              onClick={() => {
                setIsNewTarget(false)
              }}
              sx={{ borderRadius: '12px' }}
            >
              Đồng ý
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <IconButton>
              {isExpanded ? (
                <ExpandLessIcon onClick={() => setIsExpanded(!isExpanded)} />
              ) : (
                <ExpandMoreIcon onClick={() => setIsExpanded(!isExpanded)} />
              )}
            </IconButton>
          </Box>
        )}
      </Box>

      <Divider />
      {isExpanded && (
        <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
          {tasks.map((task, index) => (
            <>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                key={index}
              >
                <Box>
                  <Typography variant='body2'>{task.name}</Typography>
                  <Typography variant='body2'>
                    Tối thiểu: {task.min} {task.unit}
                  </Typography>
                </Box>
                <Box></Box>
              </Box>
              <Divider />
            </>
          ))}
          {isAddTask && (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <TextField
                id='outlined-basic'
                label='Tên công việc'
                variant='outlined'
                value={newTask.name}
                onChange={(e) => {
                  setNewTask({ ...newTask, name: e.target.value })
                }}
                sx={{ flex: '1 0 45%', maxWidth: '45%' }}
              />
              <TextField
                id='outlined-basic'
                label='Trọng số'
                variant='outlined'
                value={newTask.weight}
                onChange={(e) => {
                  setNewTask({ ...newTask, weight: e.target.value })
                }}
                sx={{ flex: '1 0 45%', maxWidth: '45%' }}
              />
              <TextField
                id='outlined-basic'
                label='Đơn vị'
                variant='outlined'
                value={newTask.unit}
                onChange={(e) => {
                  setNewTask({ ...newTask, unit: e.target.value })
                }}
                sx={{ flex: '1 0 45%', maxWidth: '45%' }}
              />
              <TextField
                id='outlined-basic'
                label='Mức tối thiểu'
                variant='outlined'
                value={newTask.min}
                onChange={(e) => {
                  setNewTask({ ...newTask, min: e.target.value })
                }}
                sx={{ flex: '1 0 45%', maxWidth: '45%' }}
              />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '16px'
            }}
          >
            {isAddTask && (
              <Button
                variant='outlined'
                size='medium'
                sx={{ fontSize: '0.75rem', borderRadius: '20px' }}
                onClick={() => {
                  setIsAddTask(false)
                  setNewTask({ name: '', weight: 0.0, min: 0, unit: '' })
                }}
              >
                Huỷ
              </Button>
            )}
            <Button
              variant='outlined'
              startIcon={<AddIcon />}
              size='medium'
              sx={{ fontSize: '0.75rem', borderRadius: '20px' }}
              onClick={() => {
                if (isAddTask) {
                  setTasks([...tasks, newTask])
                  setNewTask({ name: '', weight: 0.0, min: 0, unit: '' })
                  setIsAddTask(false)
                } else setIsAddTask(true)
              }}
            >
              Thêm công viêc
            </Button>
          </Box>{' '}
        </Box>
      )}
    </Paper>
  )
}

export default KPICard
